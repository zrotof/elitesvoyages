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
import { TourComponent } from './components/tour/tour.component';
import { AirPurifierComponent } from './components/air-purifier/air-purifier.component';
import { CarParisComponent } from './components/car-paris/car-paris.component';
const routes: Routes = [
  {path: '', redirectTo: '/accueil', pathMatch: 'full' },
  {path: 'accueil', component : HomeComponent},
  {path: 'a-propos', component : AboutComponent},
  {path: 'contact', component : ContactComponent},
  {path: 'voitures', component : CarComponent},
  {path: 'vols', component : FlightComponent},
  {path: 'dhl', component : FretDhlComponent},
  {path: 'hotels', component : HotelComponent},
  {path: 'appartements-meubles', component : ApartmentComponent},
  {path: 'tourisme', component : TourismComponent},
  {path: 'tourisme/:tourid', component: TourComponent},
  {path: 'assistance-visa', component : VisaComponent},
  {path: 'bons-plans', component : GoodDealComponent},
  {path: 'bons-plans/voitures-paris', component : CarParisComponent},
  {path: 'bons-plans/purificateurs-dair', component : AirPurifierComponent},
  {path: '**', component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    //scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
