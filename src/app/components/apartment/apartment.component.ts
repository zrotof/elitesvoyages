import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.scss'],
  encapsulation: ViewEncapsulation.None

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
  
  constructor() { }

  ngOnInit(): void {
  }

  changeReason(e: any){
    /* this.typeTrajet.setValue(e.target.value, {
       onlySelf: true
     })
     */
   }
}
