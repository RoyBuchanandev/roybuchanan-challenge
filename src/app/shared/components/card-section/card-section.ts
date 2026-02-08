import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

export interface Card {
  image: string;
  date: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-card-section',
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './card-section.html',
  styleUrl: './card-section.css',
})
export class CardSectionComponent {
  @Input() cards: Card[] = [];

  trackByCard(index: number, card: Card): string {
    return `${card.title}-${card.date}-${index}`;
  }
}
