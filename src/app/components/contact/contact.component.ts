import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { finalize } from 'rxjs/operators';

//importing fontawesome icons
import { faBuilding, faEnvelope, faPhoneAlt, faMapMarkerAlt, faClock, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { MailsService } from 'src/app/services/mails/mails.service';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import {DialogService} from 'primeng/dynamicdialog';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import { UtilsService } from 'src/app/services/utils/utils.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers:[MessageService, DialogService]

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
  isContactFormSubmittedAndNotErrorOnClientSide = false;

  constructor(
    private fb: FormBuilder, 
    private mailService: MailsService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    public dialogService: DialogService,
    private utilsService: UtilsService
    ) { 

    this.contactForm= this.fb.group({
      civility: ["", Validators.required],
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
    this.f.preference.setValue("email");
    this.f.preference.updateValueAndValidity();
  }


  //Handling submition of contact form
  onSubmitContactForm(){

    this.isContactFormSubmitted = true;

    //Handling error selecting to be shared by phone but not enter phone number
    if( this.f.preference.value === "phone"){
      if(!this.f.phone.value){
        //If the value is not set we assign an error to this field
        this.f.phone.setValidators([Validators.required])
        this.f.phone.updateValueAndValidity();
      }
    }
    else{
      this.f.phone.clearValidators();
      this.f.phone.updateValueAndValidity();
    }

    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }

    this.isContactFormSubmittedAndNotErrorOnClientSide = true;

    this.mailService.sendContactMail(JSON.stringify(this.contactForm.value)).pipe(finalize(() => this.isContactFormSubmittedAndNotErrorOnClientSide = false),
    ).subscribe((resp: any) =>{
      
      if(resp['message'] === "success"){
        this.messageService.add({severity:'success', detail: "Message envoyé avec succès."});
        this.onReset();
      }

      else{
        this.messageService.add({severity:'error',detail: "Erreur lors de l'envoi, re-essayez plus tard."});
      }
      
    });
  }

  //Function used to redirect to the right network by calling the right function in service utils
  openNetwork(param: string){

    this.utilsService.openNetwork(param)

  }

}
