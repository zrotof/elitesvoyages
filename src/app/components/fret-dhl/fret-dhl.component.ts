import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MailsService } from 'src/app/services/mails/mails.service';

@Component({
  selector: 'app-fret-dhl',
  templateUrl: './fret-dhl.component.html',
  styleUrls: ['./fret-dhl.component.scss']
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

    constructor (private fb :FormBuilder, private mailService: MailsService) { 
   
 
      this.dhlForm = this.fb.group({

        civility: [null, Validators.required],
        country: ["", Validators.required],
        weight: ["", Validators.required],
        contains: [null, Validators.required],
        dimensions: [""],
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
  }

  //Handling submition of flight form
  onSubmitDhlForm(){

    this.isDhlFormSubmitted = true;

    // stop here if form is invalid
    if (this.dhlForm.invalid) {
      return;
    }

    this.mailService.sendDhlMail(this.dhlForm.value)
    .subscribe(resp =>{
        console.log(resp);
    });
  }

}
