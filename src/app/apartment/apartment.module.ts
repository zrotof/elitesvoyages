import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApartmentRoutingModule } from './apartment-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ApartmentComponent } from './components/apartment/apartment.component';


@NgModule({
  declarations: [ApartmentComponent],
  imports: [
    CommonModule,
    ApartmentRoutingModule,
    SharedModule
  ]
})
export class ApartmentModule { }
