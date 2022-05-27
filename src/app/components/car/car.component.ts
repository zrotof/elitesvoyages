import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

import { Options, LabelType } from '@angular-slider/ngx-slider';
import {MenuItem, MessageService, PrimeNGConfig} from 'primeng/api';
import { faBuilding, faEnvelope, faPhoneAlt, faMapMarkerAlt, faClock, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { MailsService } from 'src/app/services/mails/mails.service';
import { DialogService } from 'primeng/dynamicdialog';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers:[MessageService, DialogService]

})
export class CarComponent implements OnInit {

  //fontawesome icons
  faBuilding = faBuilding;
  faEnvelope = faEnvelope;
  faPhoneAlt = faPhoneAlt;
  faMapMarkerAlt = faMapMarkerAlt;
  faClock = faClock;
  faPaperPlane = faPaperPlane;


  civilities: any = [ "Mr", "Mme"];

  // rental reasons
  reasons: any = [
                    'Location pour trajet aéroportuaire',
                    'Location pour déplacements dans la ville',
                    'Location pour déplacements hors de la ville'];

  hours: any = [ 
                  '00h00', '01h00', '02h00', '03h00', '04h00', '05h00', '06h00',
                  '07h00', '08h00', '09h00', '10h00', '11h00', '12h00', '13h00', 
                  '14h00', '15h00', '16h00', "17h00", '18h00','19h00', '20h00', 
                  '21h00', '22h00', '23h00'
                ]

towns: any = ['Douala', 'Yaoundé'];

capacities: any = [ 
                  "5 places et +", "7 places et +", "15 places et +"
                ]

drivers: any = [ 
                  "Avec chauffeur", "Sans chauffeur"
                ]

                extras  = [
                  { id: 0, name: 'Climatisation' },
                  { id: 1, name: 'Lecteur CD' },
                  { id: 2, name: 'Lecteur MP3' },
                  { id: 3, name: 'Radio' },
                  { id: 4, name: 'Bluetooth' },
                ];

//Renting car form
carForm: FormGroup;
isCarFormSubmitted = false;
isCarFormSubmittedAndNotErrorOnClientSide = false;

minDate = new Date();

constructor(
  private fb: FormBuilder, 
  private mailService: MailsService,
  private messageService: MessageService,
  private primengConfig: PrimeNGConfig,
  public dialogService: DialogService) { 

    this.carForm = this.fb.group({
      reason: ['',[Validators.required]],
      town: ["",[Validators.required]],
      capacity: ['',[Validators.required]],
      driver: ["",[Validators.required]],
      dateDeb: ["",[Validators.required]],
      dateFin: ["",[Validators.required]],
      heureDeb: [''],
      heureFin: [''],
      extras: new FormArray([]),
      civility: [null, Validators.required],
      firstname: ["", Validators.required],
      lastname:["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: [""],
    })
   }

  ngOnInit(): void {
    this.initMinDate();
  }

  //Initialize the the minimal date of calendar
  initMinDate(){
     
    this.minDate = new Date(this.minDate.setDate((new Date()).getDate()));
    
   }


  // convenient getter for easy access to form fields
  get f() { return this.carForm.controls; }


  //Resetting the form's value
  onReset() {
    this.isCarFormSubmitted = false;
    this.carForm.reset();
  }

  //Handling submition of contact form
  onSubmitCarForm(){

    this.isCarFormSubmitted = true;

    // stop here if form is invalid
    if (this.carForm.invalid) {
      return;
    }

    this.isCarFormSubmittedAndNotErrorOnClientSide = true;

    this.mailService.sendCarMail(JSON.stringify(this.carForm.value)).pipe(finalize(() => this.isCarFormSubmittedAndNotErrorOnClientSide = false),
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


  onChangeCarExtras(name: string, e: any){

    const extras = (this.f.extras as FormArray);

    if (e.target.checked) {
      extras.push(new FormControl(name));
    } else {
      const index = extras.controls.findIndex(x => x.value === name);
      extras.removeAt(index);
    }

    extras.updateValueAndValidity();


  }
}
