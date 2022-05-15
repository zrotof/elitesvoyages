import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-air-purifier',
  templateUrl: './air-purifier.component.html',
  styleUrls: ['./air-purifier.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AirPurifierComponent implements OnInit {
  
  items: MenuItem[];

  constructor() { 
    this.items = [
      {label: 'Accueil', routerLink : '/'},
      {label: 'Bons Plans', routerLink : '/bons-plans'},
      {label: "Puridicateurs d'air"}
    ];
  }

  ngOnInit(): void {
    
  }

}
