import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TourismService } from 'src/app/services/tourism/tourism.service';

import { GeneralTour } from '../../models/tourism';
@Component({
  selector: 'app-tourism',
  templateUrl: './tourism.component.html',
  styleUrls: ['./tourism.component.scss']
})
export class TourismComponent implements OnInit {


  generalTourList: GeneralTour[] = [];

  constructor(
    private tourService : TourismService,
    private router: Router
  ) { }


  ngOnInit(): void {

    this.getGeneralDataTourismPackages();
  }


  //Général data of all our packages 
  getGeneralDataTourismPackages(){

    this.generalTourList = this.tourService.generalDataTourList();

  }

  redirectRoute(param : string | undefined){
  
    this.router.navigate(['/tourisme/'+param]);

  }

}
