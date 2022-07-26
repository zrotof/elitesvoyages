import { Component, OnInit } from '@angular/core';
import { faHeart, faUsers } from '@fortawesome/free-solid-svg-icons';
import { CurrenciesService } from 'src/app/services/currencies/currencies.service';

@Component({
  selector: 'app-home-spotlighted-deal',
  templateUrl: './home-spotlighted-deal.component.html',
  styleUrls: ['./home-spotlighted-deal.component.scss']
})
export class HomeSpotlightedDealComponent implements OnInit {

  faHeart = faHeart;
  faUsers = faUsers;
  currentCurrency: any;

  constructor(
    private currencyService: CurrenciesService
  ) { }

  ngOnInit(): void {
    this.currencyService.currency$.subscribe( currency =>{
      this.currentCurrency = currency;
    })
  }
}
