import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Services } from '../../models/services';
import { faPlane, faBed, faCarSide, faHome, faCubes, faChevronLeft, faChevronRight, faGlobeAfrica, faAddressCard } from '@fortawesome/free-solid-svg-icons';

import { Carousel } from 'primeng/carousel';

import { SwiperComponent } from 'swiper/angular';

import SwiperCore, { EffectFade, Pagination, Navigation  } from "swiper";

SwiperCore.use([EffectFade, Pagination, Navigation])

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  faPlane = faPlane;
  faBed = faBed;
  faHome = faHome;
  faCarSide = faCarSide;
  faCubes = faCubes;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faGlobeAfrica = faGlobeAfrica;
  faAddressCard = faAddressCard;

  //List of our services
  servicesList: Services[] = [];
 

  constructor() {

    //Enabling scroll on carousel for mobiles
    Carousel.prototype.onTouchMove = () => { };
    //Carousel.prototype.onTouchMove = noop;


}


  ngOnInit(): void {

    this.retrieveListOfServices();

  }

  arrowSlide(param: number){

    if(param > 0){
      this.swiper?.swiperRef.slideNext(700);
      console.log('inside');
    }
    else{
      this.swiper?.swiperRef.slidePrev(700);
    }
  }


  retrieveListOfServices(){

    this.servicesList = [
      {
        label: "Billet d'Avion",
        icon: this.faPlane,
        description: "Vente de billets d'avion pour toutes vos destinations",
        link:"/flight"
      },


      {
        label: "Location de Voiture",
        icon: this.faCarSide,
        description: "Mise à disposition d'un large choix de véhicules selon vos besoins",
        link:"/rent-car"
      },

      {
        label: "Hôtel",
        icon: this.faBed,
        description: "Vente de billets d'avion pour toutes vos destinations",
        link:"/hotel"

      },

      {
        label: "Appartement meublé",
        icon: this.faHome,
        description: "Vente de billets d'avion pour toutes vos destinations",
        link:"/appartement-meuble"

      },

      {
        label: "Tourisme",
        icon: this.faGlobeAfrica,
        description: "Planification et organisation de circuits touristiques paradisiaques",
        link:"/tourism"
      },

      {
        label: "DHL",
        icon: this.faCubes,
        description: "Expédition de tous vos colis à partir du Cameroun",
        link:"/dhl"
      },

      {
        label: "Assistance Visa",
        icon: this.faAddressCard,
        description: "Assistance dans la constitution de vos dossiers pour les ambassades",
        link:"/assistance-visa"
      }

    ]
  }

}
