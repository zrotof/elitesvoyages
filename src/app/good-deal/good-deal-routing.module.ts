import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirPurifierComponent } from './components/air-purifier/air-purifier.component';
import { CarParisComponent } from './components/car-paris/car-paris.component';
import { GoodDealComponent } from './components/good-deal/good-deal.component';

const routes: Routes = [
  {path:'', component: GoodDealComponent},
  {path:'voitures-paris', component: CarParisComponent},
  {path:'purificateurs-dair', component: AirPurifierComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodDealRoutingModule { }
