import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DialogService } from 'primeng/dynamicdialog';
import {MenuItem, MessageService, PrimeNGConfig} from 'primeng/api';

//importing fontawesome icons
import { faPlaneDeparture, faPlaneArrival, faCalendarDay, faPlus, faPlusCircle, faUser, faEnvelope, faPhoneAlt, faPaperPlane, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { MailsService } from 'src/app/services/mails/mails.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers:[MessageService, DialogService]

})
export class FlightComponent implements OnInit {

  faPlaneDeparture = faPlaneDeparture;
  faPlaneArrival = faPlaneArrival;
  faCalendarDay = faCalendarDay;
  faPlus = faPlus;
  faPlusCircle = faPlusCircle;
  faUser = faUser;
  faEnvelope = faEnvelope;
  faPhoneAlt = faPhoneAlt;
  faPaperPlane = faPaperPlane;
  faMinusCircle = faMinusCircle;

  // City Names
  trajets: any = ['ALLER - RETOUR', 'ALLER SIMPLE'];
  cabines: any = ['ECONOMY', 'PREMIUM', 'BUSINESS CLASS', 'FIRST CLASS',];

  nombrePassagerTotal : any;
  nombrePassagerAdulte : any;
  nombrePassagerEnfant : any;
  nombrePassagerBebe : any;

  //contact form declaration
  flightForm : FormGroup;
  isFlightFormSubmitted = false;
  isFlightFormSubmittedAndNotErrorOnClientSide = false;

  //Boolean value according to whom we will display view of edit number of passenger(s)
  showEditPassengerView = false;

  minDate = new Date();

  constructor(
    private fb :FormBuilder, 
    private mailService: MailsService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    public dialogService: DialogService) { 
   
    this.flightForm = this.fb.group({
      way: ["", [Validators.required]],
      cabine: ["", Validators.required],
      departure: ['', Validators.required],
      arrival: ['', Validators.required],
      dateDep: ['', Validators.required],
      dateRet: ['', Validators.required],
      adult: [1],
      child: [0],
      infant: [0],
      lastname:["", [Validators.required]],
      email: ["", Validators.required],
      phone:[""],
      message: [""]
  });




  }

  ngOnInit(): void {
    this.initMinDate();
    this.listeningOnWays();
    this.initPassengerData();
  }

  //Initialize the the minimal date of calendar
  initMinDate(){
    this.minDate = new Date(this.minDate.setDate((new Date()).getDate()));
   }

   initPassengerData(){
     this.nombrePassagerAdulte = 1;
     this.nombrePassagerEnfant = 0;
     this.nombrePassagerBebe = 0;

     this.f.adult.setValue(1);
     this.f.child.setValue(0);
     this.f.infant.setValue(0);

     this.f.adult.updateValueAndValidity();
     this.f.child.updateValueAndValidity();
     this.f.infant.updateValueAndValidity();

     this.nombrePassagerTotal = this.nombrePassagerAdulte + this.nombrePassagerEnfant + this.nombrePassagerBebe;

   }

  // convenient getter for easy access to form fields
  get f() { return this.flightForm.controls; }

  //Resetting the form's value
  onReset() {
    this.isFlightFormSubmitted = false;
    this.flightForm.reset();
    this.initPassengerData();
    this.f.phone.setValue("");
    this.f.dateRet.setValue("");
    this.f.message.setValue("");
  }
  

//Listening on change on fligh way
//if the way choosed is one way we disable the return date input
listeningOnWays(){
  this.f.way.valueChanges.subscribe(
    e =>{
      let returning = <HTMLElement> document.querySelector(".element:nth-child(4) .info");

      if(e === "ALLER SIMPLE"){
        returning.classList.add('returning-css');

        this.f.dateRet.clearValidators();
        this.f.dateRet.updateValueAndValidity();
      }
      else{
        returning.classList.remove('returning-css');

        this.f.dateRet.setValidators([Validators.required])
        this.f.dateRet.updateValueAndValidity();
      }
    }
  );
}

  //Handling submition of flight form
  onSubmitFlightForm(){

    this.isFlightFormSubmitted = true;

    // stop here if form is invalid
    if (this.flightForm.invalid) {
      return;
    }

    this.isFlightFormSubmittedAndNotErrorOnClientSide = true;

    this.mailService.sendFlightMail(JSON.stringify(this.flightForm.value)).pipe(finalize(() => this.isFlightFormSubmittedAndNotErrorOnClientSide = false),
    ).subscribe((resp: any) =>{

      if(resp['message'] === "success"){
        this.messageService.add({severity:'success', detail: "Demande de réservation envoyée."});
        this.onReset();
      }

      else{
        this.messageService.add({severity:'error',detail: "Erreur lors de l'envoi"});
      }
    });
  }

  //Show or hide passenger edit panel
  onEditPassenger(){

    let datasBloc= <HTMLElement>document.querySelector(".datas-edit");

    datasBloc.classList.toggle("show-datas-edit");
  }

  //handling number of adult passenger on edit
  onEditAdultPassenger(param: number){

    if(param == 1 && this.nombrePassagerTotal < 9 ){
      this.nombrePassagerAdulte += param;
      this.nombrePassagerTotal +=param;
    }

    if(param == -1 && this.nombrePassagerTotal > 1 && this.nombrePassagerBebe < this.nombrePassagerAdulte){
      this.nombrePassagerAdulte += param;
      this.nombrePassagerTotal +=param;
    }

    this.f.adult.setValue(this.nombrePassagerAdulte);

  }

  //handling number of child passenger on edit
  onEditChildPassenger(param: number){
    
    if(param == 1 && this.nombrePassagerTotal < 9 ){
      this.nombrePassagerEnfant += param;
      this.nombrePassagerTotal +=param;
    }

    if(param == -1 && this.nombrePassagerTotal > 1 && this.nombrePassagerEnfant > 0){
      this.nombrePassagerEnfant += param;
      this.nombrePassagerTotal +=param;
    }
    this.f.child.setValue(this.nombrePassagerEnfant);

  }

  //handling number of child passenger on edit
  onEditBabyPassenger(param: number){
    
    if(param == 1 && this.nombrePassagerTotal < 9 && this.nombrePassagerAdulte > this.nombrePassagerBebe){
      this.nombrePassagerBebe += param;
      this.nombrePassagerTotal +=param;
    }

    if(param == -1 && this.nombrePassagerTotal > 0 && this.nombrePassagerBebe > 0){
      this.nombrePassagerBebe += param;
      this.nombrePassagerTotal +=param;
    }

    this.f.infant.setValue(this.nombrePassagerBebe);

  }

}
