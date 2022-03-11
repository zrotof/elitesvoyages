import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CarComponent } from './components/car/car.component';
import { FlightComponent } from './components/flight/flight.component';
import { FretDhlComponent } from './components/fret-dhl/fret-dhl.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { TourismComponent } from './components/tourism/tourism.component';
import { VisaComponent } from './components/visa/visa.component';
import { GoodDealComponent } from './components/good-deal/good-deal.component';
import { ApartmentComponent } from './components/apartment/apartment.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component : HomeComponent},
  {path: 'about', component : AboutComponent},
  {path: 'contact', component : ContactComponent},
  {path: 'rent-car', component : CarComponent},
  {path: 'flight', component : FlightComponent},
  {path: 'dhl', component : FretDhlComponent},
  {path: 'hotel', component : HotelComponent},
  {path: 'appartement-meuble', component : ApartmentComponent},
  {path: 'tourism', component : TourismComponent},
  {path: 'assistance-visa', component : VisaComponent},
  {path: 'good-deal', component : GoodDealComponent},
  {path: '**', component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    //scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
