import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { TourismService } from 'src/app/services/tourism/tourism.service';
import { TopTour, GeneralTour } from '../../../models/tourism';


import { faMapMarkerAlt,faClock, faCar, faHeart, faPlusCircle, faMinusCircle, faCalendarDay, faShuttleVan, faBed, faPlaneDeparture, faPassport, faMugHot, faMountain, faUsers, faUser, faEdit, faQuestionCircle  } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MenuItem, MessageService } from 'primeng/api';
import { finalize } from 'rxjs/operators';
import { MailsService } from 'src/app/services/mails/mails.service';
import { CurrenciesService } from 'src/app/services/currencies/currencies.service';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers:[MessageService, DialogService]
})
export class TourComponent implements OnInit, OnDestroy {


  civilities: any = [ "Mr", "Mme"];

  //The current image variable
  currentImageUrl = '';
  images: any[] = [];
  
  //Options for the primeng caroussel
  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '960px',
        numVisible: 4
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];


faMapMarkerAlt = faMapMarkerAlt; 
faShuttleVan = faShuttleVan;
faBed = faBed;
faPlaneDeparture = faPlaneDeparture;
faPassport = faPassport; 
faMugHot = faMugHot;
faMountain = faMountain;
faCalendarDay = faCalendarDay;
faMinusCircle = faMinusCircle;
faPlusCircle = faPlusCircle;
faClock =faClock;
faUsers = faUsers;
faUser = faUser;
faEdit = faEdit;
faQuestionCircle = faQuestionCircle;
faHeart = faHeart;
faCar = faCar;

nombrePassagerTotal = 1;
nombrePassagerAdulte = 1;
nombrePassagerEnfant = 0;
nombrePassagerBebe = 0;

tourForm : FormGroup ;
isTourFormSubmitted = false;
isTourFormSubmittedAndNotErrorOnClientSide = false;

price: any;
basePrice:any;

tour: any = [];

displayModal: boolean = false;


ref!: DynamicDialogRef;

titleDetail: any;
civilityDetail: any;
textDetail: any;

items!: MenuItem[];

minDate = new Date();

currentCurrency: any;

  constructor(
    private router:  Router,
    private route: ActivatedRoute,
    private tourService: TourismService,
    private fb: FormBuilder,
    private dialogService: DialogService,
    private mailService: MailsService, 
    public messageService: MessageService,
    private currencyService: CurrenciesService
  ){

    this.tourForm = this.fb.group({
      date: ['', Validators.required],
      selectedRoom: [],
      civility: ['', Validators.required],
      lastname:["", Validators.required],
      firstname:["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
    });

  }

  ngOnInit(): void {

    this.initMinDate();

    this.loadTourData();

    this.currencyService.currency$.subscribe( currency =>{
      this.currentCurrency = currency;
    })

  }

  initBreadcum(param: any){
    this.items = [
      {label: 'Accueil', routerLink : '/'},
      {label: 'Tourisme', routerLink : '/tourisme'},
      {label: param}
    ];
  }

  //Initialize the the minimal date of calendar
  initMinDate(){
     
    this.minDate = new Date(this.minDate.setDate((new Date()).getDate()));
    
   }

   loadTourData(){
    this.route.params.subscribe(
      params =>{

        if(params['id']){
          this.tourService.getTourById(params['id']).
          subscribe(resp =>{
            this.tour = resp ;
            this.f.selectedRoom.setValue(this.tour.bedrooms[0]);
            this.price = this.f.selectedRoom.value.price * this.nombrePassagerAdulte; 
            this.initBreadcum(params['id']);           
          });
        }
      }
    )
   }

  choosePrice(param: any){
    

    if(this.basePrice != param){

      this.basePrice == param;

      if( this.nombrePassagerTotal < 5 ){ 
        
        if((this.nombrePassagerEnfant + this.nombrePassagerBebe) < 2) {
          this.price = this.nombrePassagerAdulte * param;
          return ;
        }

      }

        this.price = param;
    }
  }

  // convenient getter for easy access to form fields
  get f() { return this.tourForm.controls; }

  //handling number of adult passenger on edit
  onEditAdultPassenger(param: number){

    let customPrice = <HTMLElement>document.querySelector('.custom-price');
    
    if(param == 1 && this.nombrePassagerTotal < 19 ){
      
      this.nombrePassagerAdulte += param;
      this.nombrePassagerTotal +=param;

      if(this.nombrePassagerTotal > 4 || ((this.nombrePassagerBebe + this.nombrePassagerEnfant) > 1)){
        this.price = this.f.selectedRoom.value.price;
        customPrice.style.display='initial';
        return ;
      }
      this.price = this.nombrePassagerAdulte * this.f.selectedRoom.value.price;
    }

    if(param == -1){
      
      if(this.nombrePassagerAdulte == 1 ){
        return ;
      }
      
      else{

        this.nombrePassagerAdulte += param;
        this.nombrePassagerTotal +=param;

        if(this.nombrePassagerTotal > 4 || ((this.nombrePassagerBebe + this.nombrePassagerEnfant) > 1)){
                    
          this.price = this.f.selectedRoom.value.price;
          return ;
        }

        this.price = this.nombrePassagerAdulte * this.f.selectedRoom.value.price;
        customPrice.style.display='none';

      }
    }

  }

  //handling number of child passenger on edit
  onEditChildPassenger(param: number){
    
    let customPrice = <HTMLElement>document.querySelector('.custom-price');

    if(param == 1){

      if(this.nombrePassagerTotal < 19){

        this.nombrePassagerEnfant += param;
        this.nombrePassagerTotal += param;

        if(this.nombrePassagerTotal > 4 || ((this.nombrePassagerEnfant + this.nombrePassagerBebe ) > 1) ){
    
          this.price = this.f.selectedRoom.value.price;
          customPrice.style.display='initial';

          return ;
        }

        this.price = this.nombrePassagerAdulte * this.f.selectedRoom.value.price;

      }  
    }

    if(param == -1){

      if(this.nombrePassagerEnfant > 0){

        this.nombrePassagerEnfant += param;
        this.nombrePassagerTotal +=param;


        if(this.nombrePassagerTotal > 4 || ((this.nombrePassagerEnfant + this.nombrePassagerBebe ) > 1)){
          
          this.price = this.f.selectedRoom.value.price;
            return ;
        }

        this.price = this.nombrePassagerAdulte * this.f.selectedRoom.value.price;
        customPrice.style.display='none';

      }
    }
  }

  //handling number of child passenger on edit
  onEditBabyPassenger(param: number){

    let customPrice = <HTMLElement>document.querySelector('.custom-price');
    
    if(param == 1){

      if(this.nombrePassagerTotal < 19){

        this.nombrePassagerBebe += param;
        this.nombrePassagerTotal += param;

        if(this.nombrePassagerTotal > 4 || ((this.nombrePassagerEnfant + this.nombrePassagerBebe ) > 1) ){
    
          this.price = this.f.selectedRoom.value.price;
          customPrice.style.display='initial';

          return ;
        }

        this.price = this.nombrePassagerAdulte * this.f.selectedRoom.value.price;

      }  
    }

    if(param == -1){

      if(this.nombrePassagerBebe > 0){

        this.nombrePassagerBebe += param;
        this.nombrePassagerTotal +=param;


        if(this.nombrePassagerTotal > 4 || ((this.nombrePassagerEnfant + this.nombrePassagerBebe ) > 1)){
          
          this.price = this.f.selectedRoom.value.price;
            return ;
        }

        this.price = this.nombrePassagerAdulte * this.f.selectedRoom.value.price;
        customPrice.style.display='none';

      }
    }
  }

  onSubmitTourForm(){

    this.isTourFormSubmitted = true;


    //We verify if tour date is editable
    //if no, we disable the required validator
    if(!this.tour.date.editable){
      this.f.date.clearValidators();
      this.f.date.updateValueAndValidity();
    }

    // stop here if form is invalid
    if (this.tourForm.invalid) {
      return;
    }

    this.isTourFormSubmittedAndNotErrorOnClientSide = true;

    this.mailService.sendTourMail(JSON.stringify({
      circuit: this.tour.title,
      date: this.tour.date.editable?this.f.date.value:this.tour.date.value,
      logement: this.f.selectedRoom.value.name,
      civility: this.f.civility.value,
      lastname: this.f.lastname.value,
      firstname: this.f.firstname.value,
      email: this.f.email.value,
      price: this.price,
      nombrePassagerAdult: this.nombrePassagerAdulte,
      nombrePassagerEnfant: this.nombrePassagerEnfant,
      nombrePassagerBebe: this.nombrePassagerBebe})).pipe(finalize(() => this.isTourFormSubmittedAndNotErrorOnClientSide = false),
    ).subscribe((resp: any) =>{
      
      if(resp['message'] === "success"){
        this.displayModal = true;
        this.onReset();
      }

      else{
        this.messageService.add({severity:'error',detail: "Erreur lors de l'envoi, re-essayez plus tard."});
      }
    });
  }

  //Resetting the form's value
  onReset(){
    this.isTourFormSubmitted = false;
    this.tourForm.reset();

    this.nombrePassagerAdulte= 1;
    this.nombrePassagerEnfant = 0;
    this.nombrePassagerBebe = 0;

    this.f.selectedRoom.setValue(this.tour.bedrooms[0]);
    this.price = this.f.selectedRoom.value.price * this.nombrePassagerAdulte; 
  }

  ngOnDestroy() {
      if (this.ref) {
          this.ref.close();
      }
  }

  
  
}
