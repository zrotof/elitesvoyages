import { Component, OnInit } from '@angular/core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { VisaMenu } from 'src/app/models/visa';
import { VisasService } from 'src/app/services/visas/visas.service';


@Component({
  selector: 'app-visa',
  templateUrl: './visa.component.html',
  styleUrls: ['./visa.component.scss']
})
export class VisaComponent implements OnInit {

  disabled = false;

  faPlus = faPlus ;
  faMinus = faMinus;

  visasMenuList: VisaMenu[] = [];
  visasDataList: any[] = [];

  isClicked: boolean = false;

  constructor( private visaService: VisasService) {}

  ngOnInit() {

    this.getVisasMenuList();
    this.visasDataList = this.visaService.getDubai();
    this.showHideAccordion(0);

  }
  

  // we remove the active action from every accordion and we only active the selected one
  showHideAccordion(param: number){

    let accordions = <NodeListOf<HTMLElement>>document.querySelectorAll(".assistance-visa");
    let accordionsHeaders = <NodeListOf<HTMLElement>>document.querySelectorAll(".accordion-header");

    
    if(accordions[param].classList.contains("active-accordion-content")){
      accordions[param].classList.remove("active-accordion-content");
      accordionsHeaders[param].classList.remove("active-accordion-header");
    }

    else{

      accordions.forEach(element =>{
        element.classList.remove("active-accordion-content");
      })

      accordionsHeaders.forEach(element =>{
        element.classList.remove("active-accordion-header");
      })
  
      accordions[param].classList.add("active-accordion-content");
      accordionsHeaders[param].classList.add("active-accordion-header");

    }
      
  }

  getVisasMenuList(){
    this.visasMenuList = this.visaService.getVisaMenuList();
  }

  onVisa(param:number, name: string){
    let buttonsArray = <NodeListOf<HTMLElement>>document.querySelectorAll("button");
    
    if(!buttonsArray[param].classList.contains("active-menu")){

      buttonsArray.forEach(element =>{
        element.classList.remove("active-menu");
      })
  
      buttonsArray[param].classList.add("active-menu");

    }

    if(name.includes("Dubaî")){
      console.log("dubai")
      this.visasDataList = this.visaService.getDubai();
    }

    if(name.includes("Afrique")){
      this.visasDataList = this.visaService.getAfrique();
    }

    if(name.includes("Europe")){
      this.visasDataList = this.visaService.getEurope();
    }

    if(name.includes("Amerique")){
      this.visasDataList = this.visaService.getAmerique();
    }
  }



}
