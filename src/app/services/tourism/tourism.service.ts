import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { faShuttleVan, faBed, faPlaneDeparture, faPassport, faMugHot } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

import { GeneralTour, TopTour } from '../../models/tourism';
@Injectable({
  providedIn: 'root'
})
export class TourismService {

  faShuttleVan = faShuttleVan;
  faBed = faBed;
  faPlaneDeparture = faPlaneDeparture;
  faPassport = faPassport;
  faMugHot = faMugHot;

  constructor(private http: HttpClient) { }

  showcasedTopTours() : Observable<TopTour[]>{
    
    return this.http.get<TopTour[]>("https://api.elites-voyages.com/tourisme/showcased");
  }

  generalDataTourList(): GeneralTour[]{
    return [
      {
        image:"../../../assets/img/tourism/dubai.jpeg",
        title: "7 Jours et 8 Nuits à Dubaî",
        country: "Emirates Arabes Unis",
        description: "La destination la plus prisée du monde n'attend plus que vous pour satisfaire votre curiosité et vous donner des émotions au delà de vos attentes. 7 jours juste pour vous ! ",
        price: 800000,
        id: "dubai",
        tags: [
          {
            icon: this.faPassport,
            label: "Visa"
          },
          {
            icon: this.faPlaneDeparture,
            label: "Vol"
          },
          {
            icon: this.faBed,
            label: "Hôtel"
          },
          {
            icon: this.faShuttleVan,
            label: "Navette"
          },
          {
            icon: this.faMugHot,
            label: "Petit-dej"
          }
        ]
      },

      {
  
        title: "Vers Les Hauts Lieux De La Chrétienté",
        price: 2300000,
        image: "../../../assets/img/home/tourism/isra-egyp.png",
        id:"israel-egypte",
        country: "Israel - Egypte",
        description: "Le peuple d'Israël a une histoire qui se distingue de puis Moïse jusqu'à JÉSUS CHRIST. À travers ces deux personnages, la Bible cesse d'être un mythe car la réalité témoigne de la véracité des récritures. 10 jours pour plonger dans les profondeurs de la chrétienté",
        tags: [
          {
            icon: this.faPassport,
            label: "Visa"
          },
          {
            icon: this.faPlaneDeparture,
            label: "Vol"
          },
          {
            icon: this.faBed,
            label: "Hôtel"
          },
          {
            icon: this.faShuttleVan,
            label: "Navette"
          },
          {
            icon: this.faMugHot,
            label: "Petit-dej"
          }
        ]

      },

      {
        image:"../../../assets/img/tourism/caire.jpeg",
        title: "4 Jours et 3 Nuits au Caire",
        country: "Egypte",
        description: "Amoureux de l'histoire, l'Égypte vous appelle à travers ses pyramides, ses sarcophages et toute autre envie de plonger dans l'histoire. C'est aussi un centre attractif des affaires pour commerçants et rencontres importantes.",
        price: 450000,
        id: "caire",
        tags: [
          {
            icon: this.faPassport,
            label: "Visa"
          },
          {
            icon: this.faPlaneDeparture,
            label: "Vol"
          },
          {
            icon: this.faBed,
            label: "Hôtel"
          },
          {
            icon: this.faShuttleVan,
            label: "Navette"
          },
          {
            icon: this.faMugHot,
            label: "Petit-dej"
          }
        ]
      },
      {
        image:"../../../assets/img/tourism/israel.jpeg",
        title: "Voyage en Terre Sainte",
        country: "Israêl",
        description: "Offrez-vous votre voyage en Terre Sainte à la carte en choisissant ce que vous souhaitez découvrir et défnissez le nombre de jours qui vont convient. Le prix peut varier seon que vous soyez seul ou en groupe. Bible en main nous vous conduisons vers des émotions Saintes",
        price: 1800000,
        id: "israel",
        tags: [
          {
            icon: this.faPassport,
            label: "Visa"
          },
          {
            icon: this.faPlaneDeparture,
            label: "Vol"
          },
          {
            icon: this.faBed,
            label: "Hôtel"
          },
          {
            icon: this.faShuttleVan,
            label: "Navette"
          },
          {
            icon: this.faMugHot,
            label: "Petit-dej"
          }
        ]
      },

      {
        image:"../../../assets/img/tourism/kribi.jpeg",
        title: "Weekend en amoureux à Kribi",
        country: "Cameroun",
        description: "Kribi la belle, une destination exotique au coeur de l'Afrique en miniature. Nous vous promettons un séjour qui vous bercera et un repos bien mérité tout en profitant de ses plages ydiliques et ses sables fins. Nhésitez-plus et laissez-vous tenter",
        price: 130000,
        id: "kribi",
        tags: [

          {
            icon: this.faBed,
            label: "Hôtel"
          },
          {
            icon: this.faShuttleVan,
            label: "Navette"
          },
          {
            icon: this.faMugHot,
            label: "Petit-dej"
          }
        ]
      }
    ]
  }

  getTourById(id: string){

    return this.http.get("https://api.elites-voyages.com/tourisme/"+id);
  }
}
