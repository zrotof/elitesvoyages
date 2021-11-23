import { Component, HostListener, OnInit } from '@angular/core';

import { faGlobe,faCaretDown } from '@fortawesome/free-solid-svg-icons'

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


  constructor() { }

  ngOnInit(): void {
  }


  showHideServices(): void{

    var serviceBottom = <HTMLElement>document.querySelector(".services ul");

    serviceBottom.classList.toggle("show-service-bottom");
  }

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
    if (window.pageYOffset > header.clientHeight) {
      header.classList.add('navbar-background-on-scroll');
    } else {
      header.classList.remove('navbar-background-on-scroll');
    }
  }
}
