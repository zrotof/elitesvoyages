import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostelRoutingModule } from './hostel-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HotelComponent } from './components/hotel/hotel.component';


@NgModule({
  declarations: [
    HotelComponent
  ],
  imports: [
    CommonModule,
    HostelRoutingModule,
    SharedModule
  ]
})
export class HostelModule { }
