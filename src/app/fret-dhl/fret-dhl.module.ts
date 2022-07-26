import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FretDhlRoutingModule } from './fret-dhl-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FretDhlComponent } from './components/fret-dhl/fret-dhl.component';


@NgModule({
  declarations: [
    FretDhlComponent
  ],
  imports: [
    CommonModule,
    FretDhlRoutingModule,
    SharedModule
  ]
})
export class FretDhlModule { }
