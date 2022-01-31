import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/flight';
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

  constructor(private flightService: FlightService) {

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
  }

  //get data for flights caroussel
  getPopularFlights(){
    this.popularFlights = this.flightService.getPopularFlightsForCaroussel();
  }

}
