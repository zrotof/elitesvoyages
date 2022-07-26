import { Component, OnInit } from '@angular/core';
import { RoutesService } from '../../../services/routes/routes.service';

import { faBed, faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-hotel-app',
  templateUrl: './home-hotel-app.component.html',
  styleUrls: ['./home-hotel-app.component.scss']
})
export class HomeHotelAppComponent implements OnInit {

  faBed = faBed;
  faHome = faHome;
  constructor(  private routesService: RoutesService 
    ) { }

  ngOnInit(): void {
  }


  //redirection to hotl-app component and display app block
  routeToHotelAppartement(param: string){
    this.routesService.redirectToHotelAppartementComponent(param);
  }

}
