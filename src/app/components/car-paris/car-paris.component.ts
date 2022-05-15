import { Component, OnInit, ViewEncapsulation,  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MenuItem} from 'primeng/api';

import { faCalendarDay, faPaperPlane, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-car-paris',
  templateUrl: './car-paris.component.html',
  styleUrls: ['./car-paris.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class CarParisComponent implements OnInit {

  items: MenuItem[];

  carParisForm : FormGroup;

  faPaperPlane = faPaperPlane;
  faCalendarDay = faCalendarDay;
  faMapMarkerAlt = faMapMarkerAlt;

  isCarParisFormSubmitted = false;

  civilities: any = [ "Mr", "Mme"];

  displayModal: boolean = false;


  constructor(private fb :FormBuilder) { 
    this.items = [
      {label: 'Accueil', routerLink : '/'},
      {label: 'Bons Plans', routerLink : '/bons-plans'},
      {label: "Voiture Paris"}
    ];

    this.carParisForm = this.fb.group({
      lastname:["", [Validators.required]],
      email: ["", Validators.required],
      phone:[""],
    });
  }

  get f() { return this.carParisForm.controls; }


  ngOnInit(): void {
  }

  onSubmitCarParisForm(){

  }

  showModalDialog() {
      this.displayModal = true;
  }

}
