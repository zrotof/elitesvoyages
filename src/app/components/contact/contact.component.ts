import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

//importing fontawesome icons
import { faBuilding, faEnvelope, faPhoneAlt, faMapMarkerAlt, faClock, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { MailsService } from 'src/app/services/mails/mails.service';


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
  contactForm : FormGroup;
  isContactFormSubmitted = false;

  constructor(private fb: FormBuilder, private mailService: MailsService) { 

    this.contactForm= this.fb.group({
      civility: [null, Validators.required],
      firstname: ["", Validators.required],
      lastname:["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: [""],
      subject:["", Validators.required],
      message: ["", Validators.required],
      preference: ["email"]
    });
  }

  ngOnInit(): void {
  }

  // convenient getter for easy access to form fields
  get f() { return this.contactForm.controls; }


  //Resetting the form's value
  onReset() {
    this.isContactFormSubmitted = false;
    this.contactForm.reset();
  }


  //Handling submition of contact form
  onSubmitcontactForm(){

    this.isContactFormSubmitted = true;

    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }

    //Selecting to be shared by phone but not enter phone number
    /*if( this.f.preference.value === "phone"){
      if(!this.f.phone.value){

      }
    }
    */


    if( !this.f.phone.value ){
      this.f.phone.setValue('0000') ;
    }

    this.mailService.sendContactMail(this.contactForm.value)
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

}
