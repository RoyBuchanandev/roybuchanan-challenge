import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[appRevealOnScroll]',
  standalone: true,
})
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
  @Input() revealOnce = true;
  @Input() revealRootMargin = '0px 0px -10% 0px';
  @Input() revealThreshold = 0.16;

  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);

  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const node = this.elementRef.nativeElement;

    this.renderer.setAttribute(node, 'data-reveal', '');

    if (this.shouldBypassAnimation()) {
      this.renderer.addClass(node, 'is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            if (!this.revealOnce) {
              this.renderer.removeClass(node, 'is-visible');
            }
            continue;
          }

          this.renderer.addClass(node, 'is-visible');

          if (this.revealOnce) {
            this.observer?.unobserve(entry.target);
          }
        }
      },
      {
        rootMargin: this.revealRootMargin,
        threshold: this.revealThreshold,
      }
    );

    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private shouldBypassAnimation(): boolean {
    if (typeof window === 'undefined') {
      return true;
    }

    if (typeof window.matchMedia !== 'function') {
      return true;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return true;
    }

    return typeof IntersectionObserver === 'undefined';
  }
}
