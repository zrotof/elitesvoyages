import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NotYetImplementedComponent } from './components/not-yet-implemented/not-yet-implemented.component';

const routes: Routes = [
  {path: '', redirectTo: '/accueil', pathMatch: 'full' },
  
  {
    path: 'accueil', 
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'a-propos', 
    loadChildren: () => import('./about/about.module').then(m =>m.AboutModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m =>m.ContactModule)
  },
  {
    path: 'voitures', 
    loadChildren: () => import('./car/car.module').then(m =>m.CarModule)
  },
  {
    path: 'vols', 
    loadChildren: () => import('./flight/flight.module').then(m =>m.FlightModule)
  },
  {
    path: 'dhl',
    loadChildren: () => import('./fret-dhl/fret-dhl.module').then(m =>m.FretDhlModule)
  },
  {
    path: 'hotels',
    loadChildren: () => import('./hostel/hostel.module').then(m =>m.HostelModule)
  },
  {
    path: 'appartements-meubles',
    loadChildren: () => import('./apartment/apartment.module').then(m =>m.ApartmentModule)
  },
  {
    path: 'tourisme', 
    loadChildren: () => import('./tourism/tourism.module').then(m =>m.TourismModule)
  },
  {
    path: 'assistance-visa',
    loadChildren: () => import('./visa/visa.module').then(m =>m.VisaModule)
  },  
  {
    path: 'bons-plans',
    loadChildren: () => import('./good-deal/good-deal.module').then(m =>m.GoodDealModule)
  },
  {path: 'recrutements', component : NotYetImplementedComponent},
  {path: 'confidentialite', component : NotYetImplementedComponent},
  {path: 'cgu', component : NotYetImplementedComponent},
  {path: '**', component : NotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    //scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
