import { Component, OnInit } from '@angular/core';


import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

//importing fontawesome icons
import { faBuilding, faEnvelope, faPhoneAlt, faMapMarkerAlt, faClock, faPaperPlane } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  civilities: any = [ "Mr", "Mme"];

  faBuilding = faBuilding;
  faEnvelope = faEnvelope;
  faPhoneAlt = faPhoneAlt;
  faMapMarkerAlt = faMapMarkerAlt;
  faClock = faClock;
  faPaperPlane = faPaperPlane;


  //contact form declaration
  contactForm = this.fb.group({
    userName: ["", Validators.required],
    userEmail: ["", [Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$') ]],
    userPhone:["", [Validators.pattern('^[0-9]+$')]],
    userContact: ["email"],
    userObject:[""],
    userMessage: ["", Validators.required]
});


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  changeReason(e: any){
    /* this.typeTrajet.setValue(e.target.value, {
       onlySelf: true
     })
     */

   }


  onSubmitcontactForm(){

  }

}
