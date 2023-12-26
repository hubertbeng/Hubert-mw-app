import { Component } from '@angular/core';
import { CarouselComponent } from './Login/carousel/carousel.component';
import { AppRoutingModule } from './app.routes';
import { HomepageComponent } from './Home/homepage/homepage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CarouselComponent, AppRoutingModule, HomepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title ='Hubert Mw';

}
