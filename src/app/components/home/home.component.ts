import { Component, OnInit } from '@angular/core';

import { Flight } from '../../models/flight';
import { Car } from '../../models/car';

import { FlightService } from '../../services/flights/flight.service';
import { CarService } from '../../services/cars/car.service';


import { faPlane, faBed, faCarSide, faHome, faEllipsisV, faCubes, faChevronLeft, faChevronRight, faGlobeAfrica } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  //variables for home header slide
  counter:number = 1;
  timer: any;

  //variables for popular fights caroussel
  popularFlights: Flight[] = [];
  //variables for popular fights caroussel
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

  //This is the width to move, it eaquals to the width of an element plus the margin(left-margin);
  flightCarousselLeftValue = 0;
  flightWidthToMove = 250 + 40;
  flightCurrentSlide: number = 1;





  constructor(private flightService: FlightService, private carService: CarService) {

 

   }

  ngOnInit(): void {

    this.slideFunction(this.counter);
    setInterval(this.autoSlide,8000);

    this.getPopularFlights();
    this.getPopularCars();

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


  }

  //chage slide to the next slide after 8 secondes 
  autoSlide() {
    this.counter += 1;
    //console.log("auto work");
    //this.slideFunction(this.counter);
  }

   //Show the next or prev slide when click on plus or minus sign arrows
   clickOnArrow(num: number): any{
    this.counter += num;
    this.slideFunction(this.counter);
    this.resetTimer();
  }

  //Show corresponding clicked dot 
  currentSlide(slideNumber: number):any{
    this.counter = slideNumber;

    this.slideFunction(this.counter);
    this.resetTimer();

  }

  //reset the timer to 0 and relaunch the autoSlide funtion
  resetTimer():void{
    clearInterval(this.timer);
    this.timer = setInterval(this.autoSlide,8000);
  }

 





  //Handling flights caroussel

  //get data for flights caroussel

  getPopularFlights(){

    this.popularFlights = this.flightService.getPopularFlightsForCaroussel();
  }

  //handling click on left arrow of popular flights
  flightClickPrev(){
    var flightCarousselContainer = <HTMLElement>document.querySelector(".flight-caroussel-container");
    var allCarousselElements = <NodeListOf<HTMLElement>>document.querySelectorAll(".flight-element");
    flightCarousselContainer.prepend(allCarousselElements[allCarousselElements.length-1]);
   
  }

  //handling click on right arrow of popular flights
  flightClickNext(){
    var flightCarousselContainer = <HTMLElement>document.querySelector(".flight-caroussel-container");
    var allCarousselElements = <NodeListOf<HTMLElement>>document.querySelectorAll(".flight-element");
    flightCarousselContainer.append(allCarousselElements[0]);  
  }



  //Handling flights caroussel

  //get data for flights caroussel

  getPopularCars(){

    this.popularCars = this.carService.getCarsForCarrousel();
  }

  //handling click on left arrow of popular flights
  carClickPrev(){
    var carCarousselContainer = <HTMLElement>document.querySelector(".car-caroussel-container");
    var allCarCarousselElements = <NodeListOf<HTMLElement>>document.querySelectorAll(".car-element");
    carCarousselContainer.prepend(allCarCarousselElements[allCarCarousselElements.length-1]);
   
  }

  //handling click on right arrow of popular flights
  carClickNext(){
    var carCarousselContainer = <HTMLElement>document.querySelector(".car-caroussel-container");
    var allCarCarousselElements = <NodeListOf<HTMLElement>>document.querySelectorAll(".car-element");
    carCarousselContainer.append(allCarCarousselElements[0]);
   
  }


}
