import { Injectable } from '@angular/core';
import { Flight } from '../../models/flight';

@Injectable({
  providedIn: 'root'

})
export class FlightService {

  flights: Flight[] | undefined;

  constructor() { }



  getPopularFlightsForCaroussel(){

    this.flights =[
      {
        "id": "ev-paris-two-way",
        "villeDep": "Yaoundé",
        "villeArr": "Paris",
        "codeAirportDep": "NSI",
        "codeAirportArr": "PAR",
        "price": 600000,
        "currency": "XAF",
        "img": "../../../assets/img/home-popular-paris.jpg",
        "typeTrajet": "Aller-Retour",
        "countryArr": "France"
      },
      {
        "id": "ev-bruxelle-two-way",
        "villeDep": "Douala",
        "villeArr": "Bruxelles",
        "codeAirportDep": "DLA",
        "codeAirportArr": "BRX",
        "price": 450000,
        "currency": "XAF",
        "img": "../../../assets/img/home-popular-bruxelles.jpg",
        "typeTrajet": "Aller-Retour",
        "countryArr": "Belgique"
      },
      {
        "id": "ev-dubai-two-way",
        "villeDep": "Yaoundé",
        "villeArr": "Dubaî",
        "codeAirportDep": "NSI",
        "codeAirportArr": "DUB",
        "price": 300000,
        "currency": "XAF",
        "img": "../../../assets/img/home-popular-dubai.jpg",
        "typeTrajet": "Aller-Retour",
        "countryArr": "Emyrates"
      },
      {
        "id": "ev-Rio-two-way",
        "villeDep": "Yaoundé",
        "villeArr": "Rio De Janeyro",
        "codeAirportDep": "NSI",
        "codeAirportArr": "RIJ",
        "price": 750000,
        "currency": "XAF",
        "img": "../../../assets/img/home-popular-rio-de-janeiro.jpg",
        "typeTrajet": "Aller-Retour",
        "countryArr": "Brésil"
      },
      {
        "id": "ev-cotonou-two-way",
        "villeDep": "Yaoundé",
        "villeArr": "Cotonou",
        "codeAirportDep": "NSI",
        "codeAirportArr": "CTN",
        "price": 60000,
        "currency": "XAF",
        "img": "../../../assets/img/home-popular-cotonou.jpeg",
        "typeTrajet": "Aller-Retour",
        "countryArr": "Bénin"
      },
      {
        "id": "ev-Abidjan-two-way",
        "villeDep": "Douala",
        "villeArr": "Abidjan",
        "codeAirportDep": "DLA",
        "codeAirportArr": "AAN",
        "price": 70500,
        "currency": "XAF",
        "img": "../../../assets/img/home-popular-abidjan.jpeg",
        "typeTrajet": "Aller-Retour",
        "countryArr": "Côte d'Ivoire"
      },
      {
        "id": "ev-douala-two-way",
        "villeDep": "Yaoundé",
        "villeArr": "Douala",
        "codeAirportDep": "NSI",
        "codeAirportArr": "DLA",
        "price": 30000,
        "currency": "XAF",
        "img": "../../../assets/img/home-popular-douala.jpeg",
        "typeTrajet": "Aller-Retour",
        "countryArr": "Cameroun"
      },
      {
        "id": "ev-newyork-two-way",
        "villeDep": "Douala",
        "villeArr": "New York",
        "codeAirportDep": "DLA",
        "codeAirportArr": "NYK",
        "price": 1450000,
        "currency": "XAF",
        "img": "../../../assets/img/home-popular-new-york.jpg",
        "typeTrajet": "Aller-Retour",
        "countryArr": "France"
      }
    ]

    return this.flights;
  }
}
