import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//Prime ng
import {FieldsetModule} from 'primeng/fieldset';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {ImageModule} from 'primeng/image';
import {CalendarModule} from 'primeng/calendar';
import {GalleriaModule} from 'primeng/galleria';
import {AccordionModule} from 'primeng/accordion';
import {RadioButtonModule} from 'primeng/radiobutton';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {DialogModule} from 'primeng/dialog';
import {TooltipModule} from 'primeng/tooltip';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

//Swipper
import { SwiperModule } from 'swiper/angular';

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
import { ApartmentComponent } from './components/apartment/apartment.component';
import { TourComponent } from './components/tour/tour.component';
import { AirPurifierComponent } from './components/air-purifier/air-purifier.component';
import { CarParisComponent } from './components/car-paris/car-paris.component';
import { TourDetailComponent } from './components/tour-detail/tour-detail.component';


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
    HomeAboutComponent,
    ApartmentComponent,
    TourComponent,
    AirPurifierComponent,
    CarParisComponent,
    TourDetailComponent
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
    ImageModule,
    SwiperModule,
    CalendarModule,
    GalleriaModule,
    AccordionModule,
    RadioButtonModule,
    BreadcrumbModule,
    DialogModule,
    TooltipModule,
    ProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
