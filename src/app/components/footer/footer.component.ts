import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { UtilsService } from 'src/app/services/utils/utils.service';
import { RoutesService } from '../../services/routes/routes.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private routing: RoutesService, 
    private router : Router,
    private utilsService: UtilsService) {  }

  ngOnInit(): void {
  }

  //redirection to hotl-app component and display app block
  routeToHotelAppartement(param: string){
    this.routing.redirectToHotelAppartementComponent(param);
  }

  //Function used to redirect to the right network by calling the right function in service utils
  openNetwork(param: string){

    this.utilsService.openNetwork(param)

  }

}
