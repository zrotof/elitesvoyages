import { Component, OnInit } from '@angular/core';
import { TopTour } from 'src/app/models/tourism';
import { TourismService } from 'src/app/services/tourism/tourism.service';


import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-tourism',
  templateUrl: './home-tourism.component.html',
  styleUrls: ['./home-tourism.component.scss']
})
export class HomeTourismComponent implements OnInit {

  faMapMarkerAlt = faMapMarkerAlt;

  topTourismList : TopTour[] = []; 
  
  constructor(
    private tourService : TourismService
  ) { }

  ngOnInit(): void {
    this.getTopTours();
  }

  getTopTours(){
    this.topTourismList = this.tourService.topTourismList();
  }

}
