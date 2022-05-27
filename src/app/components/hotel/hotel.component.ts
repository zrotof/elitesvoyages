import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LogementsService } from './../../services/logements/logements.service';

import { faBed, faHome, faMapMarkerAlt, faSwimmer,faWifi, faSmokingBan, faCar, faDumbbell, faCoffee, faUtensils, faConciergeBell } from '@fortawesome/free-solid-svg-icons';
import { Logement } from '../../models/logement';

import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MailsService } from 'src/app/services/mails/mails.service';
import { MessageService } from 'primeng/api';
import { finalize } from 'rxjs/operators';

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
  isHostelFormSubmittedAndNotErrorOnClientSide = false;

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
      town: ["",[Validators.required]],
      dateDeb: ['',[Validators.required]],
      dateFin: ['',[Validators.required]],
      nbr: ["",[Validators.required]],
      extras: new FormArray([]),
      civility: [, Validators.required],
      firstname: ["", Validators.required],
      lastname:["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: [""],
      hotels: ['']
    });
  }

  ngOnInit(): void {

    this.initMinDate();

  }



  loadParamValue(){
    if(history.state.parameter){
      this.param = history.state.parameter;
    }
  }

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

    this.isHostelFormSubmittedAndNotErrorOnClientSide = true;

    this.mailService.sendHostelMail(JSON.stringify(this.hostelForm.value)).pipe(finalize(() => this.isHostelFormSubmittedAndNotErrorOnClientSide = false),
    ).subscribe((resp: any) =>{
      
      if(resp['message'] === "success"){
        this.messageService.add({severity:'success', detail: "Demande de location effectuée avec succès."});
        this.onReset();
      }

      else{
        this.messageService.add({severity:'error',detail: "Erreur lors de l'envoi, re-essayez plus tard."});
      }
    });
  }


  onChangeHostelExtras(name: string, e: any){

    const extras = (this.f.extras as FormArray);

    if (e.target.checked) {
      extras.push(new FormControl(name));
    } else {
      const index = extras.controls.findIndex(x => x.value === name);
      extras.removeAt(index);
    }
    extras.updateValueAndValidity();

  }

  //Initialize the the minimal date of calendar
  initMinDate(){
     
    this.minDate = new Date(this.minDate.setDate((new Date()).getDate()));
    
  }

}
