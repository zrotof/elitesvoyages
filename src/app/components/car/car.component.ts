import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Options, LabelType } from '@angular-slider/ngx-slider';


import { faBuilding, faEnvelope, faPhoneAlt, faMapMarkerAlt, faClock, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class CarComponent implements OnInit {

  //fontawesome icons
  faBuilding = faBuilding;
  faEnvelope = faEnvelope;
  faPhoneAlt = faPhoneAlt;
  faMapMarkerAlt = faMapMarkerAlt;
  faClock = faClock;
  faPaperPlane = faPaperPlane;


  //Setting variables for the range slider
  value: number = 30000;
  highValue: number = 170000;


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


  //Renting form

  carRentingForm: FormGroup;

  options: Options = {
    floor: 30000,
    ceil: 170000,
    step:500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + " XAF" ;
        case LabelType.High:
          return value + " XAF";
        default:
          return  "";
      }
    }
  };



  constructor(private fb :FormBuilder) {

    this.carRentingForm = this.fb.group({
      reason: ['',[Validators.required]],
      town: ['',[Validators.required]]
    })
   }

  ngOnInit(): void {
  }

  changeReason(e: any){
    /* this.typeTrajet.setValue(e.target.value, {
       onlySelf: true
     })
     */
   }
}
