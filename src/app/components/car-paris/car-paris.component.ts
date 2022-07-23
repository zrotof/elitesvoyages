import { Component, OnInit, ViewEncapsulation,  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MenuItem, MessageService, PrimeNGConfig} from 'primeng/api';
import { faCalendarDay, faPaperPlane, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { MailsService } from 'src/app/services/mails/mails.service';
import { DialogService } from 'primeng/dynamicdialog';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-car-paris',
  templateUrl: './car-paris.component.html',
  styleUrls: ['./car-paris.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers:[MessageService, DialogService]

})
export class CarParisComponent implements OnInit {


  items: MenuItem[];

  carParisForm : FormGroup;
  isCarFormSubmittedAndNotErrorOnClientSide = false;
  isCarParisFormSubmitted = false;

  faPaperPlane = faPaperPlane;
  faCalendarDay = faCalendarDay;
  faMapMarkerAlt = faMapMarkerAlt;


  civilities: any = [ "Mr", "Mme"];

  minDate = new Date();

  constructor( 
    private fb: FormBuilder, 
    private mailService: MailsService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    public dialogService: DialogService) { 
    this.items = [
      {label: 'Accueil', routerLink : '/'},
      {label: 'Bons Plans', routerLink : '/bons-plans'},
      {label: "Voiture Paris"}
    ];

    this.carParisForm = this.fb.group({
      departure: ["", Validators.required],
      arrival: ["", Validators.required],
      date:["", Validators.required],
      hour: ["", Validators.required],
      civility: ["", Validators.required],
      lastname:["", Validators.required],
      firstname: ["", Validators.required],
      email: ["", Validators.required],
      phone: [""]
    });
  }



  ngOnInit(): void {
    this.initMinDate();
  }

  get f() { return this.carParisForm.controls; }


  //Resetting the form's value
  onReset() {
    this.isCarParisFormSubmitted = false;
    this.carParisForm.reset();
    this.f.phone.setValue("");
  }

  //Initialize the the minimal date displayed of calendar
  initMinDate(){
    this.minDate = new Date(this.minDate.setDate((new Date()).getDate()));
   }

  onSubmitCarParisForm(){

    this.isCarParisFormSubmitted = true;

    // stop here if form is invalid
    if (this.carParisForm.invalid) {
      return;
    }

    this.isCarFormSubmittedAndNotErrorOnClientSide = true;

    this.mailService.sendCarParisMail(JSON.stringify(this.carParisForm.value)).pipe(finalize(() => this.isCarFormSubmittedAndNotErrorOnClientSide = false),
    ).subscribe((resp: any) =>{
      
      if(resp['message'] === "success"){
        this.messageService.add({severity:'success', detail: "Votre demande a été transmise avec succès."});
        this.onReset();
      }

      else{
        this.messageService.add({severity:'error',detail: "Erreur lors de l'envoi, re-essayez plus tard."});
      }
      
    });
  }

}
