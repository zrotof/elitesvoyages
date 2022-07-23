import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }



  //Function used to redirect to the right network
  openNetwork(param: string){

    let website; 
    if(param === 'facebook'){
      website = "https://www.facebook.com/elitesvoyages237/";
    }
    else if(param === 'instagram'){
      website = "https://www.instagram.com/elites_voyages237/"
    }

    window.open(website, "_blank");

  }

  
}
