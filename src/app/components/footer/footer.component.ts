import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { RoutesService } from '../../services/routes/routes.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private routing: RoutesService) {  }

  ngOnInit(): void {
  }

  //redirection to hotl-app component and display app block
  routeToHotelAppartement(param: string){
    this.routing.redirectToHotelAppartementComponent(param);
  }

}
