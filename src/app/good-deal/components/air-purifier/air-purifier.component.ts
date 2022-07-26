import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { CurrenciesService } from 'src/app/services/currencies/currencies.service';

@Component({
  selector: 'app-air-purifier',
  templateUrl: './air-purifier.component.html',
  styleUrls: ['./air-purifier.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AirPurifierComponent implements OnInit {
  
  items: MenuItem[];
  currentCurrency: any;

  constructor(private currencyService: CurrenciesService) { 
    this.items = [
      {label: 'Accueil', routerLink : '/'},
      {label: 'Bons Plans', routerLink : '/bons-plans'},
      {label: "Puridicateurs d'air"}
    ];
  }

  ngOnInit(): void {
    this.currencyService.currency$.subscribe( currency =>{
      this.currentCurrency = currency;
    })
  }

}
