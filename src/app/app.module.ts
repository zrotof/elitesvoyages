import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlightComponent } from './components/flight/flight.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { CarComponent } from './components/car/car.component';
import { TourismComponent } from './components/tourism/tourism.component';
import { VisaComponent } from './components/visa/visa.component';
import { FretDhlComponent } from './components/fret-dhl/fret-dhl.component';
import { GoodDealComponent } from './components/good-deal/good-deal.component';


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
    GoodDealComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgbModule,
    NgxSliderModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
