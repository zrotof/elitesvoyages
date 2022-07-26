import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourismRoutingModule } from './tourism-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TourismComponent } from './components/tourism/tourism.component';
import { TourComponent } from './components/tour/tour.component';


@NgModule({
  declarations: [
    TourismComponent,
    TourComponent
  ],
  imports: [
    CommonModule,
    TourismRoutingModule,
    SharedModule
  ]
})
export class TourismModule { }
