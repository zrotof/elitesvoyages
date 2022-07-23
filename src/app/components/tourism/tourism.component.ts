import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrenciesService } from 'src/app/services/currencies/currencies.service';

import { TourismService } from 'src/app/services/tourism/tourism.service';
import { faClock, faCar, faHeart, faPlusCircle, faMinusCircle, faCalendarDay, faShuttleVan, faBed, faPlaneDeparture, faPassport, faMugHot, faMountain, faUsers, faUser, faEdit, faQuestionCircle, faMapMarkerAlt  } from '@fortawesome/free-solid-svg-icons';

import { GeneralTour } from '../../models/tourism';
@Component({
  selector: 'app-tourism',
  templateUrl: './tourism.component.html',
  styleUrls: ['./tourism.component.scss']
})
export class TourismComponent implements OnInit {

  faMapMarkerAlt = faMapMarkerAlt; 
  faShuttleVan = faShuttleVan;
  faBed = faBed;
  faPlaneDeparture = faPlaneDeparture;
  faPassport = faPassport; 
  faMugHot = faMugHot;
  faMountain = faMountain;
  faCalendarDay = faCalendarDay;
  faMinusCircle = faMinusCircle;
  faPlusCircle = faPlusCircle;
  faClock =faClock;
  faUsers = faUsers;
  faUser = faUser;
  faEdit = faEdit;
  faQuestionCircle = faQuestionCircle;
  faHeart = faHeart;
  faCar = faCar;

  allSummaryTours: GeneralTour[] = [];

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
    });
  }

  //Général data of all our packages 
  getGeneralDataTourismPackages(){
    this.tourService.generalDataTourList()
    .subscribe(resp =>{
      this.allSummaryTours = resp ;
    });
  }

  redirectRoute(param : string | undefined){
    this.router.navigate(['/tourisme/'+param]);
  }

}
