import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HomeAboutComponent } from './components/home-about/home-about.component';
import { HomeServicesComponent } from './components/home-services/home-services.component';
import { HomeFilghtsComponent } from './components/home-filghts/home-filghts.component';
import { HomeVisasComponent } from './components/home-visas/home-visas.component';
import { HomeCarsComponent } from './components/home-cars/home-cars.component';
import { HomeTourismComponent } from './components/home-tourism/home-tourism.component';
import { HomeSpotlightedDealComponent } from './components/home-spotlighted-deal/home-spotlighted-deal.component';
import { HomeHotelAppComponent } from './components/home-hotel-app/home-hotel-app.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    HomeAboutComponent,
    HomeSpotlightedDealComponent,
    HomeServicesComponent,
    HomeFilghtsComponent,
    HomeHotelAppComponent,
    HomeVisasComponent,
    HomeCarsComponent,
    HomeTourismComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
