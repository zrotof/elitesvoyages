import { Component, OnInit } from '@angular/core';
import { TopTour } from 'src/app/models/tourism';
import { TourismService } from 'src/app/services/tourism/tourism.service';


import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { CurrenciesService } from 'src/app/services/currencies/currencies.service';

@Component({
  selector: 'app-home-tourism',
  templateUrl: './home-tourism.component.html',
  styleUrls: ['./home-tourism.component.scss']
})
export class HomeTourismComponent implements OnInit {

  faMapMarkerAlt = faMapMarkerAlt;

  topTourismList : TopTour[] = []; 

  currentCurrency: any;

  constructor(
    private tourService : TourismService,
    private currencyService: CurrenciesService
  ) { }

  ngOnInit(): void {
    this.loadCurrentCurrency();
    this.getTopTours();
  }

  getTopTours(){
    this.tourService.showcasedTopTours()
    .subscribe(resp =>{
      this.topTourismList = resp;
    });
  }

  loadCurrentCurrency(){
    this.currencyService.currency$.subscribe( currency =>{
      this.currentCurrency = currency;
    })
  }

}
