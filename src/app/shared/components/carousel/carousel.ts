import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import EmblaCarousel, { EmblaCarouselType } from 'embla-carousel';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

interface CarouselItem {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

@Component({
  selector: 'app-carousel',
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class CarouselComponent implements AfterViewInit, OnDestroy {
  @ViewChild('emblaViewport') emblaViewport?: ElementRef<HTMLDivElement>;

  items: CarouselItem[] = [
    {
      image: '/assets/images/carousel_evening_entertainment.png',
      title: 'Lorem ipsum',
      subtitle: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      image: '/assets/images/hero_luxury_pool.png',
      title: 'Lorem ipsum',
      subtitle: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      image: '/assets/images/card_beach_resort.png',
      title: 'Lorem ipsum',
      subtitle: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      image: '/assets/images/card_hotel_room.png',
      title: 'Lorem ipsum',
      subtitle: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      image: '/assets/images/carousel_evening_entertainment.png',
      title: 'Lorem ipsum',
      subtitle: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      image: '/assets/images/hero_luxury_pool.png',
      title: 'Lorem ipsum',
      subtitle: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
  ];

  private emblaApi?: EmblaCarouselType;

  ngAfterViewInit(): void {
    const viewport = this.emblaViewport?.nativeElement;

    if (!viewport) {
      return;
    }

    this.emblaApi = EmblaCarousel(viewport, {
      align: 'start',
      containScroll: 'trimSnaps',
      loop: false,
      dragFree: false,
    });
  }

  ngOnDestroy(): void {
    if (!this.emblaApi) {
      return;
    }

    this.emblaApi.destroy();
  }

  trackByCarouselItem(index: number, item: CarouselItem): string {
    return `${item.image}-${index}`;
  }
}
