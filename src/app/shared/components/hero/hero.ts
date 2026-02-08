import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-hero',
  imports: [RevealOnScrollDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

}
