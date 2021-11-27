import { Component, OnInit } from '@angular/core';

import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-visa',
  templateUrl: './visa.component.html',
  styleUrls: ['./visa.component.scss']
})
export class VisaComponent implements OnInit {

  disabled = false;

  faPlus = faPlus ;
  faMinus = faMinus;

  iscliked0:boolean = false;
  iscliked1:boolean = false;
  iscliked2:boolean = false;
  iscliked3:boolean = false;
  iscliked4:boolean = false;
  iscliked5:boolean = false;

  constructor() {}

  ngOnInit() {
  }

  // we remove the active action from every accordion and we only active the selected one
  showHideAccordion(param: number){

    let accordions =  <NodeListOf<HTMLElement>>document.querySelectorAll(".assistance-visa");
    let accordionsHeaders = <NodeListOf<HTMLElement>>document.querySelectorAll(".accordion-header");

    if(accordions[param].classList.contains("active-accordion")){
      accordions[param].classList.remove("active-accordion");
      accordionsHeaders[param+1].classList.remove("active-accordion-header");


    }

    else{
      accordions.forEach(element =>{
        element.classList.remove("active-accordion");
      })

      accordionsHeaders.forEach(element =>{
        element.classList.remove("active-accordion-header");
      })
  
      accordions[param].classList.add("active-accordion");
      accordionsHeaders[param+1].classList.add("active-accordion-header");

    }

    
  }

  onClicked0(){


    if(this.iscliked0){
      this.setValueToFalse();
    }
    else{
      this.setValueToFalse();
      this.iscliked0 = ! this.iscliked0;
    } 
    
  }

  onClicked1(){

    if(this.iscliked1){
      this.setValueToFalse();
    }
    else{
      this.setValueToFalse();
      this.iscliked1 = ! this.iscliked1;
    }
  }

  onClicked2(){

      if(this.iscliked2){
        this.setValueToFalse();
      }
      
      else{
        this.setValueToFalse();
        this.iscliked2 = ! this.iscliked2;
      }
    
  }

  onClicked3(){

      if(this.iscliked3){
        this.setValueToFalse();
      }
      else{
        this.setValueToFalse();
        this.iscliked3 = ! this.iscliked3;
      }
    
  }

  onClicked4(){

      if(this.iscliked4){
        this.setValueToFalse();
      }
      else{
        this.setValueToFalse();
        this.iscliked4 = ! this.iscliked4;
      }
  }

  onClicked5(){

      if(this.iscliked5){
        this.setValueToFalse();
      }
      else{
        this.setValueToFalse();
        this.iscliked5 = ! this.iscliked5;
      }
  }
    

  //This function put all value to false
  //We will use it when we clic to activate an accordion and disable the other
  setValueToFalse(){

      this.iscliked0 = false;
    this.iscliked1 = false;
    this.iscliked2 = false;
    this.iscliked3 = false;
    this.iscliked4 = false;
    this.iscliked5 = false;

  }


}
