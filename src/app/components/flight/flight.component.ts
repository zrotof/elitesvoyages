import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';


//importing fontawesome icons
import { faPlaneDeparture, faPlaneArrival, faCalendarDay, faPlus, faPlusCircle, faUser, faEnvelope, faPhoneAlt, faPaperPlane, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss'],
  encapsulation: ViewEncapsulation.None,

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

  bookingForm = this.fb.group({
    typeTrajet: [this.trajets[0],[Validators.required]],
    typeCabine: [this.cabines[0],[Validators.required]]
  })

  nombrePassagerTotal = 1;
  nombrePassagerAdulte = 1;
  nombrePassagerEnfant = 0;
  nombrePassagerBebe = 0;
     //contact form declaration
     flightForm = this.fb.group({
      typeTraje: ["", [Validators.required]],
      typeCabine: ["", Validators.required],
      userPhone:["", [Validators.pattern('^[0-9]+$')]],
      userContact: ["email"],
      userObject:[""],
      userMessage: ["", Validators.required]
  });


  //Boolean value according to whom we will display view of edit number of passenger(s)
  showEditPassengerView = false;

  constructor(private fb :FormBuilder) { 
   
 





  }

  ngOnInit(): void {
  }

  changeTypeVoyage(e: any){
    /* this.typeTrajet.setValue(e.target.value, {
       onlySelf: true
     })
     */
   }

   changeTypeCabine(e: any){
    /* this.typeTrajet.setValue(e.target.value, {
       onlySelf: true
     })
     */
   }
  

  onBookingFormSubmit(){

  }

  onEditPassenger(){

    let datasBloc= <HTMLElement>document.querySelector(".datas-edit");

    datasBloc.classList.toggle("show-datas-edit");
  }

  onEditAdultPassenger(param: number){

    if(param == 1 && this.nombrePassagerTotal < 9 ){
      this.nombrePassagerAdulte += param;
      this.nombrePassagerTotal +=param;
    }

    if(param == -1 && this.nombrePassagerTotal > 1 && this.nombrePassagerAdulte > 1 && this.nombrePassagerBebe < this.nombrePassagerAdulte){
      this.nombrePassagerAdulte += param;
      this.nombrePassagerTotal +=param;
    }

  }

  onEditChildPassenger(param: number){
    
    if(param == 1 && this.nombrePassagerTotal < 9 ){
      this.nombrePassagerEnfant += param;
      this.nombrePassagerTotal +=param;
    }

    if(param == -1 && this.nombrePassagerTotal > 1 && this.nombrePassagerEnfant > 0){
      this.nombrePassagerEnfant += param;
      this.nombrePassagerTotal +=param;
    }

  }

  onEditBabyPassenger(param: number){
    
    if(param == 1 && this.nombrePassagerTotal < 9 && this.nombrePassagerAdulte > this.nombrePassagerBebe){
      this.nombrePassagerBebe += param;
      this.nombrePassagerTotal +=param;
    }

    if(param == -1 && this.nombrePassagerTotal > 1 && this.nombrePassagerBebe > 0){
      this.nombrePassagerBebe += param;
      this.nombrePassagerTotal +=param;
    }
  }
}
