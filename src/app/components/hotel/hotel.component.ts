import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LogementsService } from './../../services/logements/logements.service';

import { faBed, faHome, faMapMarkerAlt, faSwimmer,faWifi, faSmokingBan, faCar, faDumbbell, faCoffee, faUtensils, faConciergeBell } from '@fortawesome/free-solid-svg-icons';
import { Logement } from '../../models/logement';

import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss'],
  providers: [NgbRatingConfig],
  encapsulation: ViewEncapsulation.None

})
export class HotelComponent implements OnInit {

  civilities: any = [ "Mr", "Mme"];
  rooms: any = [ "1 chambre", "2 chambres", "3 chambres", "4 chambres"];
  
  param = "hotel";

  faBed = faBed;
  faHome = faHome;
  faMapMarkerAlt = faMapMarkerAlt;
  faSwimmer = faSwimmer;
  faWifi = faWifi;
  faSmokingBan = faSmokingBan;
  faCar = faCar;
  faDumbbell = faDumbbell;
  faCoffee = faCoffee;
  faUtensils = faUtensils;
  faConciergeBell = faConciergeBell;


  //params for pngbpagination
  pageSize = 3;
  page = 1;
  logementSize = 1;

  hostelList : Logement[] | undefined ;
  isHotelTabAlreadyClicked: boolean = false;


  pageSizeApp = 3;
  pageApp = 1;
  logementSizeApp = 1;

  apartmentList : Logement[] | undefined ;
  isAppartementTabAlreadyClicked: boolean = false;

  constructor(private getLogementService : LogementsService, config: NgbRatingConfig) { 
    // customize default values of ratings used by this component tree
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {

    if(history.state.parameter === 'hotel' || !history.state.parameter){
      this.chooseTab(1, 'hotel');
    }

    else{
      this.chooseTab(2, history.state.parameter);
    }
  }

  changeReason(e: any){
    /* this.typeTrajet.setValue(e.target.value, {
       onlySelf: true
     })
     */
   }



  loadParamValue(){
    if(history.state.parameter){
      this.param = history.state.parameter;
    }
  }

  //Handling click on tabs
  chooseTab(tabNumber: number, clickedParam:any){

    var myTabMenus = <NodeListOf<HTMLElement>>document.querySelectorAll(".tab-menu");
    var myTabPages = <NodeListOf<HTMLElement>>document.querySelectorAll(".tab-page");

    myTabMenus.forEach(element =>{
      element.classList.remove("active-tab-menu");
    })

    myTabPages.forEach(element =>{
      element.classList.remove("active-tab-page");
    })

    myTabMenus[tabNumber - 1].classList.add("active-tab-menu");
    myTabPages[tabNumber - 1].classList.add("active-tab-page");

    //setting variable of hostel list or apartments list depending on the clickedParam

    if(clickedParam === 'hotel' && !this.isHotelTabAlreadyClicked){
      this.hostelList = this.getTabData(clickedParam);
      this.isHotelTabAlreadyClicked = true;
      this.logementSize = this.hostelList.length;

    }

    if(clickedParam === 'appartement' && !this.isAppartementTabAlreadyClicked){
      this.apartmentList = this.getTabData(clickedParam);
      this.isAppartementTabAlreadyClicked = true;
      this.logementSize = this.apartmentList.length;
    }

  }

  getTabData(param:any){
    return this.getLogementService.getLogementList(param);
  }

}
