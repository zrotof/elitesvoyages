import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoodDealRoutingModule } from './good-deal-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AirPurifierComponent } from './components/air-purifier/air-purifier.component';
import { GoodDealComponent } from './components/good-deal/good-deal.component';
import { CarParisComponent } from './components/car-paris/car-paris.component';


@NgModule({
  declarations: [
    AirPurifierComponent,
    GoodDealComponent,
    CarParisComponent
  ],
  imports: [
    CommonModule,
    GoodDealRoutingModule,
    SharedModule
  ]
})
export class GoodDealModule { }
