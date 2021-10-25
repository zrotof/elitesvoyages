import { Injectable } from '@angular/core';

import { Car } from '../../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  cars: Car[] | undefined;

  categoriesCar =[
    {"libelle": "citadine"},
    {"libelle": "berlines compacte"},
    {"libelle": "break"},
    {"libelle": "routière"},
    {"libelle": "monospace"},
    {"libelle": "4X4"},
    {"libelle": "SUV"},
    {"libelle": "ludospace"},
    {"libelle": "pick up"},
    {"libelle": "fourgonette"},
    {"libelle": "polyvalente"},
    {"libelle": "cabriolé"},
  ]


  constructor() { }


  getCarsForCarrousel(){

    this.cars =[
      {
        "id": "ev-paris-two-way",
        "nomVoit": "Wolswagen Golf",
        "categVoit": "BERLINE",
        "imageVoit": "../../../assets/img/home-car-volkswagen.jpeg",
        "climVoit": "non",
        "nombrePlaceVoit": 5,
        "nombrePorteVoit": 5,
        "prixLocationDansVilleVoit": 55000,
        "prixLocationHorsVilleVoit": 85000,
        "prixTrajetAeroportVoit": 30000,
        "avecChauffeurVoit": "oui",
        "sansChauffeurVoit": "non",
        "villeVoit":"Yaoundé"
      },
      {
        "id": "ev-paris-two-way",
        "nomVoit": "Toyota CHR",
        "categVoit": "SUV",
        "imageVoit": "../../../assets/img/home-car-toyotachr.jpeg",
        "climVoit": "oui",
        "nombrePlaceVoit": 5,
        "nombrePorteVoit": 3,
        "prixLocationDansVilleVoit": 55000,
        "prixLocationHorsVilleVoit": 75000,
        "prixTrajetAeroportVoit": 15000,
        "avecChauffeurVoit": "oui",
        "sansChauffeurVoit": "non",
        "villeVoit":"Yaoundé"

      },
      {
        "id": "ev-paris-two-way",
        "nomVoit": "Seat MII",
        "categVoit": "CITADINE",
        "imageVoit": "../../../assets/img/home-car-seat.jpeg",
        "climVoit": "oui",
        "nombrePlaceVoit": 5,
        "nombrePorteVoit": 5,
        "prixLocationDansVilleVoit": 35000,
        "prixLocationHorsVilleVoit": 45000,
        "prixTrajetAeroportVoit": 20000,
        "avecChauffeurVoit": "oui",
        "sansChauffeurVoit": "non",
        "villeVoit":"Douala"

      },
      {
        "id": "ev-paris-two-way",
        "nomVoit": "peugeot 5008",
        "categVoit": "SUV",
        "imageVoit": "../../../assets/img/home-car-peugeot.png",
        "climVoit": "oui",
        "nombrePlaceVoit": 7,
        "nombrePorteVoit": 5,
        "prixLocationDansVilleVoit": 45000,
        "prixLocationHorsVilleVoit": 55000,
        "prixTrajetAeroportVoit": 20000,
        "avecChauffeurVoit": "oui",
        "sansChauffeurVoit": "oui",
        "villeVoit":"Yaoundé"

      },
      {
        "id": "ev-paris-two-way",
        "nomVoit": "Mercedes Marco Polo",
        "categVoit": "FOURGONETTE",
        "imageVoit": "../../../assets/img/home-car-mercedez.png",
        "climVoit": "non",
        "nombrePlaceVoit": 9,
        "nombrePorteVoit": 5,
        "prixLocationDansVilleVoit": 20000,
        "prixLocationHorsVilleVoit": 35000,
        "prixTrajetAeroportVoit": 23500,
        "avecChauffeurVoit": "oui",
        "sansChauffeurVoit": "false",
        "villeVoit":"Douala"

      },
      {
        "id": "ev-paris-two-way",
        "nomVoit": "Ford Ranger 3",
        "categVoit": "PICK-UP",
        "imageVoit": "../../../assets/img/home-car-ford.jpeg",
        "climVoit": "oui",
        "nombrePlaceVoit": 5,
        "nombrePorteVoit": 4,
        "prixLocationDansVilleVoit": 100000,
        "prixLocationHorsVilleVoit": 155000,
        "prixTrajetAeroportVoit": 30000,
        "avecChauffeurVoit": "oui",
        "sansChauffeurVoit": "non",
        "villeVoit":"Douala"

      }
    ]


    return this.cars;
  }
}
