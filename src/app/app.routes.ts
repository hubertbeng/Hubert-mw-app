import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './Home/homepage/homepage.component';
import { CarouselComponent } from './Login/carousel/carousel.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

  export class AppRoutingModule { }