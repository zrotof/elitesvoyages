import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { FieldsetModule, } from 'primeng/fieldset';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {ImageModule} from 'primeng/image';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { FlightComponent } from './components/flight/flight.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { CarComponent } from './components/car/car.component';
import { TourismComponent } from './components/tourism/tourism.component';
import { VisaComponent } from './components/visa/visa.component';
import { FretDhlComponent } from './components/fret-dhl/fret-dhl.component';
import { GoodDealComponent } from './components/good-deal/good-deal.component';
import { HomeVisasComponent } from './components/home-visas/home-visas.component';
import { HomeTourismComponent } from './components/home-tourism/home-tourism.component';
import { HomeFilghtsComponent } from './components/home-filghts/home-filghts.component';
import { HomeServicesComponent } from './components/home-services/home-services.component';
import { HomeHotelAppComponent } from './components/home-hotel-app/home-hotel-app.component';
import { HomeCarsComponent } from './components/home-cars/home-cars.component';
import { HomeAboutComponent } from './components/home-about/home-about.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    NotFoundComponent,
    FooterComponent,
    FlightComponent,
    HotelComponent,
    CarComponent,
    TourismComponent,
    VisaComponent,
    FretDhlComponent,
    GoodDealComponent,
    HomeVisasComponent,
    HomeTourismComponent,
    HomeFilghtsComponent,
    HomeServicesComponent,
    HomeHotelAppComponent,
    HomeCarsComponent,
    HomeAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgbModule,
    NgxSliderModule,
    HttpClientModule,
    FieldsetModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    ImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
