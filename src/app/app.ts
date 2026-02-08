import { Component } from '@angular/core';
import { Hero } from './shared/components/hero/hero';
import { CardSectionComponent, Card } from './shared/components/card-section/card-section';
import { CarouselComponent } from './shared/components/carousel/carousel';

@Component({
  selector: 'app-root',
  imports: [Hero, CardSectionComponent, CarouselComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  cards: Card[] = [
    {
      image: '/assets/images/card_hotel_room.png',
      date: '12 Oct 2023',
      title: 'Lorem ipsum dolor sit',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.'
    },
    {
      image: '/assets/images/card_buffet_dining.png',
      date: '15 Oct 2023',
      title: 'Lorem ipsum dolor sit',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.'
    },
    {
      image: '/assets/images/card_beach_resort.png',
      date: '20 Oct 2023',
      title: 'Lorem ipsum dolor sit',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.'
    },
    {
      image: '/assets/images/card_hotel_room.png',
      date: '25 Oct 2023',
      title: 'Lorem ipsum dolor sit',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.'
    },
    {
      image: '/assets/images/card_buffet_dining.png',
      date: '28 Oct 2023',
      title: 'Lorem ipsum dolor sit',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.'
    },
    {
      image: '/assets/images/card_beach_resort.png',
      date: '30 Oct 2023',
      title: 'Lorem ipsum dolor sit',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.'
    }
  ];
}
