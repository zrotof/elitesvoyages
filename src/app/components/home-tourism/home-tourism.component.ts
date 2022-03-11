import { Component, OnInit } from '@angular/core';
import { Tourism } from 'src/app/models/tourism';
import { TourismService } from 'src/app/services/tourism/tourism.service';

@Component({
  selector: 'app-home-tourism',
  templateUrl: './home-tourism.component.html',
  styleUrls: ['./home-tourism.component.scss']
})
export class HomeTourismComponent implements OnInit {

  topTourismList : Tourism[] = []; 
  constructor(
    private tourismService : TourismService
  ) { }

  ngOnInit(): void {
    this.tourismTop();
  }

  tourismTop(){
    this.topTourismList = this.tourismService.topTourism();
  }

}
