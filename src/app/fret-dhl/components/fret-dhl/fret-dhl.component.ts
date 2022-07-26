import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { MailsService } from 'src/app/services/mails/mails.service';
import { DialogService } from 'primeng/dynamicdialog';
import {MessageService, PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-fret-dhl',
  templateUrl: './fret-dhl.component.html',
  styleUrls: ['./fret-dhl.component.scss'],
  providers:[MessageService, DialogService]
})
export class FretDhlComponent implements OnInit {

  civilities: any = [ "Mr", "Mme"];

  contains: any = [ 
    "documents uniquement", "documents et autres"
  ];

  formats: any = [ 
    "Enveloppe A4", "Je ne connais pas"
  ]

  //contact form declaration
  dhlForm : FormGroup;
  isDhlFormSubmitted = false ;
  isDhlFormSubmittedAndNotErrorOnClientSide = false;


    constructor (
      private fb :FormBuilder, 
      private mailService: MailsService,
      private messageService: MessageService,
      private primengConfig: PrimeNGConfig) { 
   
 
      this.dhlForm = this.fb.group({

        country: ["", Validators.required],
        weight: ["", Validators.required],
        contains: ["", Validators.required],
        dimensions: ["", Validators.required],
        civility: ["", Validators.required],
        firstname: ["", Validators.required],
        lastname:["", [Validators.required]],
        email: ["", Validators.required],
        phone:[""],
    });

   }

  ngOnInit(): void {
  }

  // convenient getter for easy access to form fields
  get f() { return this.dhlForm.controls; }


  //Resetting the form's value
  onReset() {
    this.isDhlFormSubmitted = false;
    this.dhlForm.reset();
    this.f.phone.setValue("");
  }

  //Handling submition of flight form
  onSubmitDhlForm(){

    this.isDhlFormSubmitted = true;

    // stop here if form is invalid
    if (this.dhlForm.invalid) {
      return;
    }

    this.isDhlFormSubmittedAndNotErrorOnClientSide = true;

    this.mailService.sendDhlMail(JSON.stringify(this.dhlForm.value)).pipe(finalize(() => this.isDhlFormSubmittedAndNotErrorOnClientSide = false),
    ).subscribe(resp =>{

        if(resp['message'] === "success"){
          this.messageService.add({severity:'success', detail: "Demande de dévis effectuée avec succès."});
          this.onReset();
        }
  
        else{
          this.messageService.add({severity:'error',detail: "Erreur lors de l'envoi, re-essayez plus tard."});
        }
    });
  }

}
