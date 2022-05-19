import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { faShuttleVan, faBed, faPlaneDeparture, faPassport, faMugHot } from '@fortawesome/free-solid-svg-icons';

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

  topTourismList() : TopTour[]{
    return [

      {
        title: "7 Nuits Et 8 Jours À Dubaî",
        currency: "XAF",
        price: 800000,
        image:"../../../assets/img/home/tourism/dubai.jpeg",
        link: "dubai",
        place: "Dubaî"
      }

      ,

      {
        title: "Vers Les Hauts Lieux De La Chrétienté",
        currency: "XAF",
        price: 2300000,
        image: "../../../assets/img/home/tourism/isra-egyp.png",
        link:"israel-egypte",
        place: "Israel - Egypte"

      }

      ,

      {
        title: "Pélérinage En Terre Sainte",
        currency: "XAF",
        price: 780000,
        image: "../../../assets/img/home/tourism/israel.jpeg",
        link:"israel",
        place: "Israel"

      },

      {
        title: "3 Nuits Et 4 Jours Au Caire",
        currency: "XAF",
        price: 450000,
        image:"../../../assets/img/home/tourism/caire.jpeg",
        link: "caire",
        place: "Caire"

      },
      
      {
        title: "Weekend Détente En Amoureux",
        currency: "XAF",
        price: 150000,
        image:"../../../assets/img/home/tourism/kribi.jpeg",
        link: "kribi",
        place: "Kribi"

      }
      
    ];
  }

  generalDataTourList(): GeneralTour[]{
    return [
      {
        image:"../../../assets/img/tourism/dubai.jpeg",
        title: "7 Jours et 8 Nuits à Dubaî",
        country: "Emirates Arabes Unis",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque earum reiciendis ullam, esse cumque doloremque eum quisquam. Saepe, eligendi ipsa. Culpa doloremque eaque obcaecati iste autem ab quisquam, beatae ipsa!",
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
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque earum reiciendis ullam, esse cumque doloremque eum quisquam. Saepe, eligendi ipsa. Culpa doloremque eaque obcaecati iste autem ab quisquam, beatae ipsa!",
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
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque earum reiciendis ullam, esse cumque doloremque eum quisquam. Saepe, eligendi ipsa. Culpa doloremque eaque obcaecati iste autem ab quisquam, beatae ipsa!",
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
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque earum reiciendis ullam, esse cumque doloremque eum quisquam. Saepe, eligendi ipsa.",
        price: 650000,
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
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque earum reiciendis ullam, esse cumque doloremque eum quisquam. Saepe, eligendi ipsa. Culpa doloremque eaque obcaecati iste autem ab quisquam, beatae ipsa!",
        price: 150000,
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
    return this.http.get("https://www.api.elites-voyages.com/tourisme/"+id);
  }
}
