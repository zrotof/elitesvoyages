import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//Swipper
import { SwiperModule } from 'swiper/angular';


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
import {CurrencyPipe} from './pipes/currency/currency.pipe';

@NgModule({
  declarations: [
    CurrencyPipe
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    FieldsetModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    ImageModule,
    CalendarModule,
    GalleriaModule,
    AccordionModule,
    RadioButtonModule,
    BreadcrumbModule,
    DialogModule,
    TooltipModule,
    ProgressSpinnerModule,
    SwiperModule
  ],
  exports: [
    ReactiveFormsModule,
    FontAwesomeModule,
    FieldsetModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    ImageModule,
    CalendarModule,
    GalleriaModule,
    AccordionModule,
    RadioButtonModule,
    BreadcrumbModule,
    DialogModule,
    TooltipModule,
    ProgressSpinnerModule,
    SwiperModule,
    CurrencyPipe
  ]
})
export class SharedModule { 


}

