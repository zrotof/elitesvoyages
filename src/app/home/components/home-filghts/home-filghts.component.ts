import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/flight';
import { CurrenciesService } from 'src/app/services/currencies/currencies.service';
import { FlightService } from 'src/app/services/flights/flight.service';

@Component({
  selector: 'app-home-filghts',
  templateUrl: './home-filghts.component.html',
  styleUrls: ['./home-filghts.component.scss']
})
export class HomeFilghtsComponent implements OnInit {

  //variables carrying list of populars fights caroussel
  popularFlights: Flight[] = [];

  //variables for popular fights caroussel
  flightsResponsiveOptions : any;

  currentCurrency: any;

  constructor(
    private flightService: FlightService,
    private currencyService: CurrenciesService) {

    this.flightsResponsiveOptions = [
      {
          breakpoint: '1178px',
          numVisible: 3,
          numScroll: 1
      },
      {
          breakpoint: '914px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '675px',
          numVisible: 1,
          numScroll: 1
      }
    ];
  }

  ngOnInit(): void {

    this.getPopularFlights();
    this.currencyService.currency$.subscribe( currency =>{
      this.currentCurrency = currency;
    })
  }

  //get data for flights caroussel
  getPopularFlights(){
    this.popularFlights = this.flightService.getPopularFlightsForCaroussel();
  }

}
