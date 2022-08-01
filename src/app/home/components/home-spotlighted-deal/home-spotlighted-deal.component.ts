import { Component, OnInit } from '@angular/core';
import { faHeart, faUsers } from '@fortawesome/free-solid-svg-icons';
import { SpotlightedTour } from 'src/app/models/tourism';
import { CurrenciesService } from 'src/app/services/currencies/currencies.service';
import { TourismService } from 'src/app/services/tourism/tourism.service';

@Component({
  selector: 'app-home-spotlighted-deal',
  templateUrl: './home-spotlighted-deal.component.html',
  styleUrls: ['./home-spotlighted-deal.component.scss']
})
export class HomeSpotlightedDealComponent implements OnInit {

  faHeart = faHeart;
  faUsers = faUsers;
  currentCurrency: any;
  topSpotlightedList: SpotlightedTour[] =[];

  constructor(
    private currencyService: CurrenciesService,
    private tourService: TourismService
  ) { }

  ngOnInit(): void {
    this.loadCurrentCurrency();
    this.getSpotlightedToursList();
  }


  getSpotlightedToursList(){
    this.tourService.getSpotlightedTours()
    .subscribe(resp =>{
      this.topSpotlightedList = resp;
    });

    
  }

  loadCurrentCurrency(){
    this.currencyService.currency$.subscribe( currency =>{
      this.currentCurrency = currency;
    })
  }
}
