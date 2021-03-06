import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Services } from '../../../models/services';
import { faPlane, faBed, faCarSide, faHome, faCubes, faChevronLeft, faChevronRight, faGlobeAfrica, faAddressCard } from '@fortawesome/free-solid-svg-icons';

import { Carousel } from 'primeng/carousel';

import { SwiperComponent } from 'swiper/angular';

import SwiperCore, { EffectFade, Pagination, Navigation  } from "swiper";
import { Meta, Title } from '@angular/platform-browser';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

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
 

  constructor(
    private title: Title,
    private meta: Meta,
    private readonly analyticsService : AnalyticsService
  ) {

    //Enabling scroll on carousel for mobiles
    Carousel.prototype.onTouchMove = () => { };
    //Carousel.prototype.onTouchMove = noop;

}


  ngOnInit(): void {
    this.initMetaData();
    this.analyticsService.initialize();
    this.retrieveListOfServices();
  }

  initMetaData(){

    //SEO metadata
    this.title.setTitle("Elites Voyages | Agence de voyage et de tourisme");
    this.meta.addTag({name: 'description', content: "ici sera la méta tag.mais on vera ça plus tard"});
  
    // Twitter metadata
    this.meta.addTag({name: 'twitter:card', content: 'summary'});
    this.meta.addTag({name: 'twitter:site', content: '@AngularUniv'});
    this.meta.addTag({name: 'twitter:title', content: ''});
    this.meta.addTag({name: 'twitter:description', content: 'this.course.description'});
    this.meta.addTag({name: 'twitter:text:description', content: 'this.course.description'});
    this.meta.addTag({name: 'twitter:image', content: 'https://avatars3.githubusercontent.com/u/16628445?v=3&s=200'});
  }

  arrowSlide(param: number){

    if(param > 0){
      this.swiper?.swiperRef.slideNext(700);
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
        link:"/vols"
      },


      {
        label: "Location de Voiture",
        icon: this.faCarSide,
        description: "Mise à disposition d'un large choix de véhicules selon vos besoins",
        link:"/voitures"
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
        link:"/appartements-meubles"

      },

      {
        label: "Tourisme",
        icon: this.faGlobeAfrica,
        description: "Planification et organisation de circuits touristiques paradisiaques",
        link:"/tourisme"
      },

      {
        label: "DHL",
        icon: this.faCubes,
        description: "Expédition de tous vos colis à partir du Cameroun",
        link:"/dhl"
      }
      
/*      ,

      {
        label: "Assistance Visa",
        icon: this.faAddressCard,
        description: "Constitution de vos dossiers pour les ambassades",
        link:"/assistance-visa"
      }
*/
    ]
  }

}
