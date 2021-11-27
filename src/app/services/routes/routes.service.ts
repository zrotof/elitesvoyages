import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor(private router : Router) { } 

  redirectToHotelAppartementComponent(param: any){
    
    this.router.navigateByUrl('/hostel-apartment', { state: {parameter: param} })

  }
}
