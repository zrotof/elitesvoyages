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
    return this.http.get<TopTour[]>("https://www.api.elites-voyages.com/tourisme/showcased");
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
    //return this.http.get("https://www.api.elites-voyages.com/tourisme/"+id);
    return this.http.get("https://www.api.elites-voyages.com/tourisme/"+id);
  }
}
