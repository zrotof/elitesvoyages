import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LogementsService } from './../../services/logements/logements.service';

import { faBed, faHome, faMapMarkerAlt, faSwimmer,faWifi, faSmokingBan, faCar, faDumbbell, faCoffee, faUtensils, faConciergeBell } from '@fortawesome/free-solid-svg-icons';
import { Logement } from '../../models/logement';

import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MailsService } from 'src/app/services/mails/mails.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss'],
  providers: [NgbRatingConfig, MessageService],
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

  extras  = [
    { id: 0, name: 'Climatisation' },
    { id: 1, name: 'TV' },
    { id: 2, name: 'Penderie' },
    { id: 3, name: 'Eau Chaude' },
    { id: 4, name: 'Fer à repasser' },
    { id: 5, name: 'Chambre avec balcon' }
  ];

  minDate = new Date();

  hostelForm: FormGroup;
  isHostelFormSubmitted = false;

  constructor(
    private fb :FormBuilder, 
    private getLogementService : LogementsService, 
    config: NgbRatingConfig, 
    private mailService: MailsService,  
    private messageService: MessageService,
    ) { 
    // customize default values of ratings used by this component tree
    config.max = 5;
    config.readonly = true;

    this.hostelForm = this.fb.group({
      town: [null,[Validators.required]],
      dateDeb: ['',[Validators.required]],
      dateFin: ['',[Validators.required]],
      nbr: [null,[Validators.required]],
      extras: new FormArray([]),
      civility: [null, Validators.required],
      firstname: ["", Validators.required],
      lastname:["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: [""],
      hotels: ['']
    });
  }

  ngOnInit(): void {
/*
    if(history.state.parameter === 'hotel' || !history.state.parameter){
      this.chooseTab(1, 'hotel');
    }

    else{
      this.chooseTab(2, history.state.parameter);
    }
*/
  }



  loadParamValue(){
    if(history.state.parameter){
      this.param = history.state.parameter;
    }
  }

  /*
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

  */

    // convenient getter for easy access to form fields
    get f() { return this.hostelForm.controls; }


    //Resetting the form's value
   onReset() {
     this.isHostelFormSubmitted = false;
     this.hostelForm.reset();
   }

  onSubmitHostelForm(){
    this.isHostelFormSubmitted = true;

    // stop here if form is invalid
    if (this.hostelForm.invalid) {
      return;
    }

   

    this.mailService.sendHostelMail(this.hostelForm.value)

    .subscribe(resp =>{

      if(resp){
        this.messageService.add({severity:'success', detail: "Message envoyé."});
      }
      else{
        this.messageService.add({severity:'error',detail: "Erreur lors de l'envoi"});
      }
    });
  }


  onChangeCheckox(name: string, e: any){

    const extras = (this.f.extras as FormArray);

    if (e.target.checked) {
      extras.push(new FormControl(name));
    } else {
      const index = extras.controls.findIndex(x => x.value === name);
      extras.removeAt(index);
    }
  }

  //Initialize the the minimal date of calendar
  initMinDate(){
     
    this.minDate = new Date(this.minDate.setDate((new Date()).getDate()));
    
   }

}
