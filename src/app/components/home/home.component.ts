import { Component, OnInit } from '@angular/core';
import { RoutesService } from '../../services/routes/routes.service';
import { Services } from '../../models/services';
import { faPlane, faBed, faCarSide, faHome, faCubes, faChevronLeft, faChevronRight, faGlobeAfrica, faAddressCard } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //List of our services
  servicesList: Services[] = [];

  //variables for home header slide
  counter: number = 1;
  timer: any;


  faPlane = faPlane;
  faBed = faBed;
  faCarSide = faCarSide;
  faHome = faHome;
  faCubes = faCubes;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faGlobeAfrica = faGlobeAfrica;
  faAddressCard = faAddressCard;
 

  constructor( private routing: RoutesService) {
   
}


  ngOnInit(): void {

    this.slideFunction(this.counter);
    this.retrieveListOfServices();

  }


  //redirection to hotl-app component and display app block
  routeToHotelAppartement(param: string){
    this.routing.redirectToHotelAppartementComponent(param);
  }





  //This block of functions handle my slider.

  //First we click on an arrow on the wiew, this action will call clickOnArrow()
  //clickOnArrow() function will increment or decrement the number of the current slide and will give that number to function slidFunction()
  //slidFunction() display the slide correspondong to the current slide and set the corresponding active dot
  
  //For sliding we also have the possibility to click on a dot and the slider will this the corresponding slide clicked
  //When we cliked on a dot this will initialise the position of the slide clicked and give this number to the slideFunction()


  clickOnArrow(num: number): any{
    this.counter += num;
    this.slideFunction(this.counter);
    this.resetTimer();
  }

  slideFunction(slideNumber: number): void{
    var mySlides = <NodeListOf<HTMLElement>>document.querySelectorAll(".mySlide");
    var myDots = <NodeListOf<HTMLElement>>document.querySelectorAll(".dot");

    mySlides.forEach(element => {
      element.style.display = "none";
    });

    myDots.forEach(element =>{
      element.classList.remove("active-dot");
    })

    if(slideNumber > mySlides.length){
      this.counter = 1;
    }

    if(slideNumber < 1){
      this.counter = mySlides.length;
    }

    

    mySlides[this.counter - 1].style.display ="block";

    myDots[this.counter - 1].classList.add("active-dot");

    this.resetTimer();
  }

  

  //Show corresponding clicked dot 
  currentSlide(slideNumber: number):any{

    this.counter = slideNumber;
    this.slideFunction(this.counter);
    this.resetTimer();

  }

  //autoslide function
  autoSlide() {

    this.counter += 1;
    this.slideFunction(this.counter);

  }

  //reset the timer to 0 and relaunch the autoSlide funtion after 8 seconds
  resetTimer():void{
    clearInterval(this.timer);
    this.timer = setInterval(()=>{this.autoSlide()},8000);
  }


  retrieveListOfServices(){

    this.servicesList = [
      {
        label: "Billet d'Avion",
        icon: this.faPlane,
        description: "Vente de billets d'avion pour toutes vos destinations"
      },

      {
        label: "Hôtel & Appartement meublé",
        icon: this.faBed,
        description: "Vente de billets d'avion pour toutes vos destinations"
      },

      {
        label: "Location de Voiture",
        icon: this.faCarSide,
        description: "Mise à disposition d'un large choix de véhicules selon vos besoins"
      },

      {
        label: "Tourisme",
        icon: this.faGlobeAfrica,
        description: "Planification et organisation de circuits touristiques paradisiaques"
      },

      {
        label: "Fret et DHL",
        icon: this.faCubes,
        description: "Expédition de colis et assistance dédouanement"
      },

      {
        label: "Assistance Visa",
        icon: this.faAddressCard,
        description: "Vente de billets d'avion pour toutes vos destinations"
      }

    ]
  }

}
