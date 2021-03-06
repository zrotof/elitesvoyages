import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MailsService } from 'src/app/services/mails/mails.service';
import {MenuItem, MessageService, PrimeNGConfig} from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers:[MessageService, DialogService]

})
export class ApartmentComponent implements OnInit {

  civilities: any = [ "Mr", "Mme"];
  rooms: any = [ 
    "T1",
    "T1 bis", 
    "T2", 
    "T2 bis", 
    "T3", 
    "T4"];

    towns: any = ['Douala', 'Yaoundé'];

    extras  = [
      { id: 0, name: 'Climatisation' },
      { id: 1, name: 'TV' },
      { id: 2, name: 'Penderie' },
      { id: 3, name: 'Eau Chaude' },
      { id: 4, name: 'Chambre avec balcon' }
    ];

    minDate = new Date();

    apartForm: FormGroup;
    isApartFormSubmitted = false;
    isApartFormSubmittedAndNotErrorOnClientSide = false;

    constructor(
      private fb :FormBuilder, 
      private mailService: MailsService,
      private messageService: MessageService,
      private primengConfig: PrimeNGConfig,
      public dialogService: DialogService) { 
   
      this.apartForm = this.fb.group({
        town: ['',[Validators.required]],
        dateDeb: ['',[Validators.required]],
        dateFin: ['',[Validators.required]],
        type: ['',[Validators.required]],
        extras: new FormArray([]),
        civility: ['', Validators.required],
        firstname: ["", Validators.required],
        lastname:["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        phone: [""],
      });
  }

  ngOnInit(): void {
    this.initMinDate();
  }

   //Initialize the the minimal date of calendar
   initMinDate(){
    this.minDate = new Date(this.minDate.setDate((new Date()).getDate()));
   }

  // convenient getter for easy access to form fields
  get f() { return this.apartForm.controls; }


   //Resetting the form's value
  onReset() {
    this.isApartFormSubmitted = false;
    this.apartForm.reset();
    this.f.extras = new FormArray([]);
    this.removeExtrasOptionsCheckStatusWhenFormIsValidate();
    this.f.phone.setValue("");

  }

  //Handling submition of apart form
  onSubmitApartForm(){

    this.isApartFormSubmitted = true;

    // stop here if form is invalid
    if (this.apartForm.invalid) {
      return;
    }

    this.isApartFormSubmittedAndNotErrorOnClientSide = true;

    this.mailService.sendApartMail(JSON.stringify(this.apartForm.value)).pipe(finalize(() => this.isApartFormSubmittedAndNotErrorOnClientSide = false),
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

  
  //Used to handling the click event on extras
  onChangeApartExtras(name: string, e: any){

    const extras = (this.f.extras as FormArray);

    if (e.target.checked) {
      extras.push(new FormControl(name));
    } else {
      const index = extras.controls.findIndex(x => x.value === name);
      extras.removeAt(index);
    }

    extras.updateValueAndValidity();

  }


  //Used to remove checked Mark on form when we submitted it
  removeExtrasOptionsCheckStatusWhenFormIsValidate(){

    const extrasList = <NodeListOf<HTMLInputElement>>document.querySelectorAll('.extra > input'); 

    extrasList.forEach(extra =>{
      if(extra.checked){
        extra.checked = false;
      }
    })
  }
}
