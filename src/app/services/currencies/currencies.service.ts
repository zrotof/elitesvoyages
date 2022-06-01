import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Currency } from '../../models/currency';
@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  currency$ : BehaviorSubject<any> = new BehaviorSubject(this.getCurrency());
  oldCurrency: Currency = {symbol: 'XAF', convertRate: 1};

  constructor(private http: HttpClient) { }


  initCurrencyLocalStorage(){

    const currency = this.getCurrency();
    let initialCurrencyJson: any
    if(!currency){
      
      initialCurrencyJson = JSON.stringify({symbol:'XAF', convertRate: 1});
      localStorage.setItem('currency', initialCurrencyJson);
      this.currency$.next(JSON.parse(initialCurrencyJson)) ;
    }

    
  }

  //Function used to get the current currency
  getCurrency(){
    const currencyJsonString : string = localStorage.getItem('currency') as string;

    const currency : Currency  = JSON.parse(currencyJsonString);

    return currency;
  }


  //Function used to add a new item to the cart
  setCurrency(currency: string){

    this.oldCurrency = this.getCurrency();

    this.http.get("https://v6.exchangerate-api.com/v6/"+environment.currencyExchangeAPI+"/pair/"+'XAF'+"/"+currency)
    .subscribe((resp: any) =>{
      const rate:number = resp.conversion_rate;

      const nemCurrency : Currency = {symbol: currency, convertRate:rate};
      
      localStorage.setItem('currency', JSON.stringify(nemCurrency));
      this.currency$.next(this.getCurrency());
    })
    
  }

}
