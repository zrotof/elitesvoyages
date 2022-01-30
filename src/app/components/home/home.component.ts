import { Component, OnInit } from '@angular/core';

import { Flight } from '../../models/flight';
import { Car } from '../../models/car';

import { FlightService } from '../../services/flights/flight.service';
import { CarService } from '../../services/cars/car.service';
import { RoutesService } from '../../services/routes/routes.service';
import { Services } from '../../models/services';
import { faPlane, faBed, faCarSide, faHome, faEllipsisV, faCubes, faChevronLeft, faChevronRight, faGlobeAfrica, faAddressCard } from '@fortawesome/free-solid-svg-icons';


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

  //variables for popular fights caroussel
  popularFlights: Flight[] = [];
  popularFlightsDotsNumber : number = 0;

  //variables for popular fights caroussel

  flightsResponsiveOptions : any;








  popularCars: Car[] = [];

  faPlane = faPlane;
  faBed = faBed;
  faCarSide = faCarSide;
  faHome = faHome;
  faEllipsisV = faEllipsisV;
  faCubes = faCubes;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faGlobeAfrica = faGlobeAfrica;
  faAddressCard = faAddressCard;
  //This is the width to move, it eaquals to the width of an element plus the margin(left-margin);
  flightCarousselLeftValue = 0;
  flightWidthToMove = 250 + 40;
  flightCurrentSlide: number = 1;





  constructor(private flightService: FlightService, private carService: CarService, private routing: RoutesService) {
    
    this.flightsResponsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
   
}


  ngOnInit(): void {

    this.slideFunction(this.counter);

    this.getPopularFlights();
    this.getPopularCars();
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

 





  //Handling flights caroussel

  //handling click on left arrow of popular flights on click on clickOnFlightArrow(param) function
  //When we click on the right narrow we append the first element of our list to the last
  //When we click on the left one we prepend
  clickOnFlightArrow(param: number){

    var flightCarousselContainer = <HTMLElement>document.querySelector(".flight-caroussel-container");
    var allCarousselElements = <NodeListOf<HTMLElement>>document.querySelectorAll(".flight-element");
    var allCarousselDots = <NodeListOf<HTMLElement>>document.querySelectorAll(".flight-dot");


    //removing active class on dots
    allCarousselDots.forEach(elem =>{
      elem.classList.remove('flight-active-dot');
      }
    );

    //getting the right positionof the current element when clicked

    if(param > 0){

      flightCarousselContainer.append(allCarousselElements[0]);  

      if(this.popularFlightsDotsNumber < allCarousselDots.length - 1 ){

        this.popularFlightsDotsNumber += 1;
      }
  
      else{
        this.popularFlightsDotsNumber = 0;
      }


    }
    else{

      flightCarousselContainer.prepend(allCarousselElements[allCarousselElements.length-1]);


      if(this.popularFlightsDotsNumber == 0 ){

        this.popularFlightsDotsNumber = allCarousselDots.length - 1;
  
      }
  
      else{
        this.popularFlightsDotsNumber -= 1;
      }

      
  
    }

    //setting active dot and flight
    allCarousselDots[this.popularFlightsDotsNumber].classList.add("flight-active-dot");
  
  }


  //get data for flights caroussel
  getPopularFlights(){
    this.popularFlights = this.flightService.getPopularFlightsForCaroussel();
  }








  //Handling flights caroussel
  

  //handling click on left arrow of popular flights
  clickOnCarArrow(param:number){
    var carCarousselContainer = <HTMLElement>document.querySelector(".car-caroussel-container");
    var allCarCarousselElements = <NodeListOf<HTMLElement>>document.querySelectorAll(".car-element");

    if(param > 0){

      carCarousselContainer.append(allCarCarousselElements[0]);

    }
    else{

      carCarousselContainer.prepend(allCarCarousselElements[allCarCarousselElements.length-1]);
    }
    
  }


  //get data for flights caroussel
  getPopularCars(){
    this.popularCars = this.carService.getCarsForCarrousel();
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
