import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrenciesService } from 'src/app/services/currencies/currencies.service';

import { TourismService } from 'src/app/services/tourism/tourism.service';

import { GeneralTour } from '../../models/tourism';
@Component({
  selector: 'app-tourism',
  templateUrl: './tourism.component.html',
  styleUrls: ['./tourism.component.scss']
})
export class TourismComponent implements OnInit {


  generalTourList: GeneralTour[] = [];

  currentCurrency: any;

  constructor(
    private tourService : TourismService,
    private router: Router,
    private currencyService: CurrenciesService
  ) {
    
   }


  ngOnInit(): void {

    this.getGeneralDataTourismPackages();
    this.currencyService.currency$.subscribe( currency =>{
      this.currentCurrency = currency;
      console.log(this.currentCurrency)
    });
  }


  //Général data of all our packages 
  getGeneralDataTourismPackages(){

    this.generalTourList = this.tourService.generalDataTourList();

  }

  redirectRoute(param : string | undefined){
  
    this.router.navigate(['/tourisme/'+param]);

  }

}
