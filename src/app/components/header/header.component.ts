import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { faGlobe,faCaretDown } from '@fortawesome/free-solid-svg-icons'
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faGlobe=faGlobe;
  faCaretDown=faCaretDown;
  selectedLanguage= "En";

  isEnglishChoose : boolean = true;
  isFrenchChoose : boolean = false;

  visibleSidebarMenu: boolean = false;

  isBurgerMenuClicked: boolean = false;
  isFirstNavigation: boolean = true;

  constructor( private router: Router) {

   
  }

  ngOnInit(): void {
    this.routingEvent();
  }

  //On routing event we, if we are on small screen, we toggle the menu to disapear from the screen after we click on a link
  routingEvent(){
    this.router.events.subscribe( event =>{

      if(this.isFirstNavigation){
        this.isFirstNavigation = false;

        return ;
      }

      if(event instanceof NavigationEnd){

        let navSmallScreen = <HTMLElement>document.querySelector('.header-right');
        let header = <HTMLElement>document.querySelector('header');
        let inputstatus = <HTMLInputElement>document.querySelector('.burger input');

        if(this.isBurgerMenuClicked ){
          inputstatus.checked = false;
          navSmallScreen.classList.toggle("toggle-nav");
          this.isBurgerMenuClicked = false;  
          
          if(window.pageYOffset <= header.clientHeight) {
            header.classList.remove('navbar-background-on-scroll');
          }

        }

        else{
          
          if (window.pageYOffset <= header.clientHeight) {

            if(this.router.url.includes('tourisme/')){
              header.classList.add('navbar-background-on-scroll');
            }
            
            else{
              header.classList.remove('navbar-background-on-scroll');
            }
          }
        }

        
      }


    })
  }



//Function used to hide or show services bloc when mouse overing the bloc
  showHideServices(): void{

    var serviceBottom = <HTMLElement>document.querySelector(".services-bloc ul");

    serviceBottom.classList.toggle("show-services-bottom");
  }

  //Function used to hide or show languages bloc when mouse overing the bloc
  showHideLanguages(): void{

    var languageBottom= <HTMLElement>document.querySelector(".languages-bottom");

      languageBottom.classList.toggle("show-language-bottom");
  }

  chooseEnglish(){
    var english = <HTMLInputElement>document.querySelector( ".en" );
    
    if(!this.isEnglishChoose){
      var french = <HTMLInputElement>document.querySelector( ".fr" );
    
      english.checked=true ;
      french.checked=false ;

      this.isEnglishChoose = true;
      this.isFrenchChoose = false;
      this.selectedLanguage= "En"
      this.showHideLanguages();

    }
    else{
      english.checked=true ;
    }
  }

  chooseFrench(){
    var french = <HTMLInputElement>document.querySelector( ".fr" );

    if(!this.isFrenchChoose){

      var english = <HTMLInputElement>document.querySelector( ".en" );
      french.checked=true ;
      english.checked=false ;

      this.isFrenchChoose = true;
      this.isEnglishChoose = false;
      this.selectedLanguage= "Fr"
      this.showHideLanguages();

    }
    else{
      french.checked=true ;
    }

  }


  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
    let header = <HTMLElement>document.querySelector('header');
    if(this.router.url.includes('tourisme/')){
      header.classList.add('navbar-background-on-scroll');
    }
    else{

      if(!this.isBurgerMenuClicked){
        if (window.pageYOffset > header.clientHeight) {
          header.classList.add('navbar-background-on-scroll');
        }
        else {
          header.classList.remove('navbar-background-on-scroll');
        }
      }
      
    }
  }

   //Handling click on burger menu
   onBurgerMenu(){
    let navSmallScreen = <HTMLElement>document.querySelector('.header-right');
    let inputstatus = <HTMLInputElement>document.querySelector('.burger input');
    let header = <HTMLElement>document.querySelector('header');

    // À chaque clique sur l'input on vérifie si l'input est cochée
    if(inputstatus.checked === true){
      
      navSmallScreen.classList.toggle("toggle-nav")

      if (window.pageYOffset <= header.clientHeight) {
        header.classList.add('navbar-background-on-scroll');
      }
      this.isBurgerMenuClicked = true;

    }
    else{
      navSmallScreen.classList.toggle("toggle-nav");
      this.isBurgerMenuClicked = false;

      if(!this.router.url.includes('tourisme/')){
        if(window.pageYOffset <= header.clientHeight) {
          header.classList.remove('navbar-background-on-scroll');
        }
      }

    }
  }
}
