import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


//importing fontawesome icons
import { faPlaneDeparture, faPlaneArrival, faCalendarDay, faPlus, faPlusCircle, faUser, faEnvelope, faPhoneAlt, faPaperPlane, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { MailsService } from 'src/app/services/mails/mails.service';

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

  nombrePassagerTotal = 1;
  nombrePassagerAdulte = 1;
  nombrePassagerEnfant = 0;
  nombrePassagerBebe = 0;

  //contact form declaration
  flightForm : FormGroup;

  isFlightFormSubmitted = false;

  //Boolean value according to whom we will display view of edit number of passenger(s)
  showEditPassengerView = false;

  constructor(private fb :FormBuilder, private mailService: MailsService) { 
   
    this.flightForm = this.fb.group({
      way: [null, [Validators.required]],
      cabine: [null, Validators.required],
      departure: ['', Validators.required],
      arrival: ['', Validators.required],
      dateDep: ['', Validators.required],
      dateRet: [''],
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
  }

  // convenient getter for easy access to form fields
  get f() { return this.flightForm.controls; }

//Resetting the form's value
onReset() {
  this.isFlightFormSubmitted = false;
  this.flightForm.reset();
}
  

  //Handling submition of flight form
  onSubmitFlightForm(){

    this.isFlightFormSubmitted = true;

    // stop here if form is invalid
    if (this.flightForm.invalid) {
      return;
    }

    /*
    if( !this.f.phone.value ){
      this.f.phone.setValue('0000') ;
    }
    */

    this.mailService.sendFlightMail(this.flightForm.value)
    .subscribe(resp =>{
        console.log(resp);

      /*
      if(resp['message'] === "success"){
        //this.messageService.add({severity:'success', detail: "Message envoyé."});
        //this.onReset();
      }

      else{

        //this.messageService.add({severity:'error',detail: "Erreur lors de l'envoi"});
    
      }
*/
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

    if(param == -1 && this.nombrePassagerTotal > 0 && this.nombrePassagerAdulte > 0 && this.nombrePassagerBebe < this.nombrePassagerAdulte){
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

    if(param == -1 && this.nombrePassagerTotal > 0 && this.nombrePassagerEnfant > 0){
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
