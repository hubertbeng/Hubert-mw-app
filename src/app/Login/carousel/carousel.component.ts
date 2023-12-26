import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from '../card/card.component';
import { AppRoutingModule } from '../../app.routes';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    CommonModule,
    NgbModule,
    CardComponent,
    AppRoutingModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
  providers: [NgbCarouselConfig]
})
export class CarouselComponent{

  images = [
    {src: 'https://i.pinimg.com/originals/71/9e/80/719e80760999b4c355a723224120eb07.png'},
    {src: 'https://e0.pxfuel.com/wallpapers/230/584/desktop-wallpaper-aesthetic-moving-chill-aesthetic.jpg'},
    {src: 'https://i.pinimg.com/originals/bc/2b/65/bc2b65bd08c137f576984e9f65e17d1f.jpg'},
    {src: 'https://e1.pxfuel.com/desktop-wallpaper/991/632/desktop-wallpaper-1920x1080-minimalist-aesthetic-aesthetic-1920x1080-pc.jpg'},
    {src: 'https://i.pinimg.com/736x/15/f1/b1/15f1b1b82acad926684141d73b9cd18c.jpg'}
  ];
  
  constructor(config: NgbCarouselConfig) {
    config.interval = 3000;
    config.keyboard = true;
    config.wrap = true;
    config.showNavigationArrows = false;
    config.pauseOnHover = false;
    config.animation = true;
  }

}
