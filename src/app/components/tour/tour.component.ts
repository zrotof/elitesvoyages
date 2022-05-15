import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { TourismService } from 'src/app/services/tourism/tourism.service';
import { TopTour, GeneralTour } from '../../models/tourism';

import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import { faClock, faPlusCircle, faMinusCircle, faCalendarDay, faShuttleVan, faBed, faPlaneDeparture, faPassport, faMugHot, faMountain, faUsers, faUser, faEdit, faQuestionCircle  } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MenuItem, MessageService } from 'primeng/api';
import { TourDetailComponent } from '../tour-detail/tour-detail.component';

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

nombrePassagerTotal = 1;
nombrePassagerAdulte = 1;
nombrePassagerEnfant = 0;
nombrePassagerBebe = 0;

tourForm : FormGroup ;

price: any;

tour: any = [];

displayModal: boolean = false;


ref!: DynamicDialogRef;

titleDetail: any;
civilityDetail: any;
textDetail: any;

  items!: MenuItem[];


  constructor(
    private router:  Router,
    private route: ActivatedRoute,
    private tourService: TourismService,
    private fb: FormBuilder,
    private dialogService: DialogService, 
    public messageService: MessageService
  ) { 
    this.tourForm = this.fb.group({
      selectedRoom: [],
      civility: [null, Validators.required],
      lastname:["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
    });

  }

  ngOnInit(): void {

    this.route.params.subscribe(
      params =>{
        if(params['tourid']){
          this.tourService.getTourById(params['tourid']).
          subscribe(resp =>{
            this.tour = resp ;
            this.f.selectedRoom.setValue(this.tour.bedrooms[0]);
            this.price = this.tour.bedrooms[0].price; 

            this.initBreadcum(params['tourid']);           
          });
        }

      }
    )
  }

  initBreadcum(param: any){
    this.items = [
      {label: 'Accueil', routerLink : '/'},
      {label: 'Tourisme', routerLink : '/tourisme'},
      {label: param}
    ];
  }


  choosePrice(price: any){
    this.price = price;
  }

 // convenient getter for easy access to form fields
 get f() { return this.tourForm.controls; }





/*
  getGeneralTourById(tourid: string){
      this.tourService.getTour(tourid).subscribe(
        result => {
          this.tour = result.message;
          //Here we set colors array
  
  
  
          //Here setting the array of images displayed on gallery
          this.tour?.images.forEach((element: string)=>{
            this.tourImagesUrl.push(element)
          })
  
          this.tourImagesUrl.unshift(this.tour.imageVitrine)
        }
      )
  }
*/

//handling number of adult passenger on edit
  onEditAdultPassenger(param: number){

    if(param == 1 && this.nombrePassagerTotal < 19 ){
      this.nombrePassagerAdulte += param;
      this.nombrePassagerTotal +=param;
    }

    if(param == -1 && this.nombrePassagerTotal > 0 && this.nombrePassagerAdulte > 0 && this.nombrePassagerBebe < this.nombrePassagerAdulte){
      this.nombrePassagerAdulte += param;
      this.nombrePassagerTotal +=param;
    }

    this.f.adult.setValue(this.nombrePassagerAdulte);

  }

  //handling number of child passenger on edit
  onEditChildPassenger(param: number){
    
    if(param == 1 && this.nombrePassagerTotal < 19 ){
      this.nombrePassagerEnfant += param;
      this.nombrePassagerTotal +=param;
    }

    if(param == -1 && this.nombrePassagerTotal > 0 && this.nombrePassagerEnfant > 0){
      this.nombrePassagerEnfant += param;
      this.nombrePassagerTotal +=param;
    }
    this.f.child.setValue(this.nombrePassagerEnfant);

  }

  //handling number of child passenger on edit
  onEditBabyPassenger(param: number){
    
    if(param == 1 && this.nombrePassagerTotal < 19 && this.nombrePassagerAdulte > this.nombrePassagerBebe){
      this.nombrePassagerBebe += param;
      this.nombrePassagerTotal +=param;
    }

    if(param == -1 && this.nombrePassagerTotal > 0 && this.nombrePassagerBebe > 0){
      this.nombrePassagerBebe += param;
      this.nombrePassagerTotal +=param;
    }

    this.f.infant.setValue(this.nombrePassagerBebe);

  }

changeReason(e: any){
  /* this.typeTrajet.setValue(e.target.value, {
     onlySelf: true
   })
   */

 }


  showModalDialog() {
    this.displayModal = true;
  }

  ngOnDestroy() {
      if (this.ref) {
          this.ref.close();
      }
  }
  
}
