import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Logement } from '../../models/logement';
import { faSwimmer } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class LogementsService {

  logements: Logement[] | undefined;


  constructor(private httpRequest: HttpClient) { }


  //return an array of Logement(hôtels & appartements meublés) depending on paramater
  getLogementList( param: any){

    //Getting hôtel array
    if(param === 'hotel'){

      this.logements =[
        {
          "id": "ev-h-001",
          "villeLogement": "Yaounde",
          "nomLogement": "Hilton Hôtel",
          "nbrEtoileLogement": 5,
          "priceLogement": 35000,
          "currencyLogement": "XAF",
          "imgLogement": "../../../assets/img/hotels/hilton.jpeg",
          "optionLogement": [
            {
              "id": "ev-h-0-001",
              "libelleOption": "Piscine"
            },
  
            {
              "id": "ev-h-0-002",
              "libelleOption": "Free Wifi"
            },
  
            {
              "id": "ev-h-0-005",
              "libelleOption": "Room Service"
            },
  
            {
              "id": "ev-h-0-006",
              "libelleOption": "parking Gratuit"
            },
  
            {
              "id": "ev-h-0-008",
              "libelleOption": "Salle de sport"
            }
          ]
        },
        {
          "id": "ev-h-001",
          "villeLogement": "Yaounde",
          "nomLogement": "Hilton Hôtel",
          "nbrEtoileLogement": 5,
          "priceLogement": 35000,
          "currencyLogement": "XAF",
          "imgLogement": "../../../assets/img/hotels/hilton.jpeg",
          "optionLogement": [
            {
              "id": "ev-h-0-001",
              "libelleOption": "Piscine"
            },
  
            {
              "id": "ev-h-0-002",
              "libelleOption": "Free Wifi"
            },
  
            
  
            {
              "id": "ev-h-0-004",
              "libelleOption": "Animaux interdits"
            }
          ]
        },
        {
          "id": "ev-h-001",
          "villeLogement": "Yaounde",
          "nomLogement": "Hilton Hôtel",
          "nbrEtoileLogement": 5,
          "priceLogement": 35000,
          "currencyLogement": "XAF",
          "imgLogement": "../../../assets/img/hotels/hilton.jpeg",
          "optionLogement": [
            {
              "id": "ev-h-0-001",
              "libelleOption": "Piscine"
            },
  
      
            {
              "id": "ev-h-0-006",
              "libelleOption": "parking Gratuit"
            },
  
            {
              "id": "ev-h-0-007",
              "libelleOption": "Meeting Room"
            },
  
            {
              "id": "ev-h-0-008",
              "libelleOption": "Salle de sport"
            }
          ]
        },
        {
          "id": "ev-h-001",
          "villeLogement": "Yaounde",
          "nomLogement": "Hilton Hôtel",
          "nbrEtoileLogement": 5,
          "priceLogement": 35000,
          "currencyLogement": "XAF",
          "imgLogement": "../../../assets/img/hotels/hilton.jpeg",
          "optionLogement": [
            {
              "id": "ev-h-0-001",
              "libelleOption": "Piscine"
            },
  
            {
              "id": "ev-h-0-002",
              "libelleOption": "Free Wifi"
            },
  
            {
              "id": "ev-h-0-003",
              "libelleOption": "Non-Fumeur"
            },
  
            {
              "id": "ev-h-0-006",
              "libelleOption": "parking Gratuit"
            },
  
            {
              "id": "ev-h-0-007",
              "libelleOption": "restaurant"
            },
  
            {
              "id": "ev-h-0-008",
              "libelleOption": "Salle de sport"
            }
          ]
        },
        {
          "id": "ev-h-001",
          "villeLogement": "Yaounde",
          "nomLogement": "Hilton Hôtel",
          "nbrEtoileLogement": 5,
          "priceLogement": 35000,
          "currencyLogement": "XAF",
          "imgLogement": "../../../assets/img/hotels/hilton.jpeg",
          "optionLogement": [
            {
              "id": "ev-h-0-001",
              "libelleOption": "Piscine"
            },
  
            {
              "id": "ev-h-0-002",
              "libelleOption": "Free Wifi"
            },
  
            {
              "id": "ev-h-0-003",
              "libelleOption": "Non-Fumeur"
            },
  
            {
              "id": "ev-h-0-004",
              "libelleOption": "Animaux interdits"
            },
  
            {
              "id": "ev-h-0-005",
              "libelleOption": "Room Service"
            },
  
            {
              "id": "ev-h-0-006",
              "libelleOption": "parking Gratuit"
            }
          ]
        },
        {
          "id": "ev-h-001",
          "villeLogement": "Yaounde",
          "nomLogement": "Hilton Hôtel",
          "nbrEtoileLogement": 5,
          "priceLogement": 35000,
          "currencyLogement": "XAF",
          "imgLogement": "../../../assets/img/hotels/hilton.jpeg",
          "optionLogement": [
            {
              "id": "ev-h-0-001",
              "libelleOption": "Piscine"
            },
  
            {
              "id": "ev-h-0-002",
              "libelleOption": "Free Wifi"
            },
  
            {
              "id": "ev-h-0-003",
              "libelleOption": "Non-Fumeur"
            },
  
            {
              "id": "ev-h-0-006",
              "libelleOption": "parking Gratuit"
            },
  
            {
              "id": "ev-h-0-007",
              "libelleOption": "Meeting Room"
            },
  
            {
              "id": "ev-h-0-008",
              "libelleOption": "Salle de sport"
            }
          ]
        },
        {
          "id": "ev-h-001",
          "villeLogement": "Yaounde",
          "nomLogement": "Hilton Hôtel",
          "nbrEtoileLogement": 5,
          "priceLogement": 35000,
          "currencyLogement": "XAF",
          "imgLogement": "../../../assets/img/hotels/hilton.jpeg",
          "optionLogement": [
            {
              "id": "ev-h-0-001",
              "libelleOption": "Piscine"
            },
  
            {
              "id": "ev-h-0-002",
              "libelleOption": "Free Wifi"
            },
  
            {
              "id": "ev-h-0-003",
              "libelleOption": "Non-Fumeur"
            },

  
            {
              "id": "ev-h-0-006",
              "libelleOption": "parking Gratuit"
            },
  
            {
              "id": "ev-h-0-007",
              "libelleOption": "Meeting Room"
            },
  
            {
              "id": "ev-h-0-008",
              "libelleOption": "Salle de sport"
            }
          ]
        },
        {
          "id": "ev-h-001",
          "villeLogement": "Yaounde",
          "nomLogement": "Hilton Hôtel",
          "nbrEtoileLogement": 5,
          "priceLogement": 35000,
          "currencyLogement": "XAF",
          "imgLogement": "../../../assets/img/hotels/hilton.jpeg",
          "optionLogement": [
            {
              "id": "ev-h-0-001",
              "libelleOption": "Piscine"
            },
  
            {
              "id": "ev-h-0-002",
              "libelleOption": "Free Wifi"
            },
  
            {
              "id": "ev-h-0-003",
              "libelleOption": "Non-Fumeur"
            },
  
            {
              "id": "ev-h-0-004",
              "libelleOption": "Animaux interdits"
            },
  
            {
              "id": "ev-h-0-005",
              "libelleOption": "Room Service"
            },
  
            {
              "id": "ev-h-0-006",
              "libelleOption": "parking Gratuit"
            },
  
            {
              "id": "ev-h-0-007",
              "libelleOption": "Meeting Room"
            },
  
            {
              "id": "ev-h-0-008",
              "libelleOption": "Salle de sport"
            }
          ]
        }
      ];

    }

    //Getting appartements meublés array
    else{

      this.logements =[
        {
          "id": "ev-h-001",
          "villeLogement": "Yaounde",
          "nomLogement": "Hilton Hôtel",
          "nbrEtoileLogement": 5,
          "priceLogement": 35000,
          "currencyLogement": "XAF",
          "imgLogement": "../../../assets/img/hotels/app.jpeg",
          "optionLogement": [
            {
              "id": "ev-h-0-001",
              "libelleOption": "Piscine"
            },
  
            {
              "id": "ev-h-0-002",
              "libelleOption": "Free Wifi"
            },
  
            {
              "id": "ev-h-0-003",
              "libelleOption": "Non-Fumeur"
            },
  
            {
              "id": "ev-h-0-004",
              "libelleOption": "Animaux interdits"
            },
  
            {
              "id": "ev-h-0-005",
              "libelleOption": "Room Service"
            },
  
            {
              "id": "ev-h-0-006",
              "libelleOption": "parking Gratuit"
            },
  
            {
              "id": "ev-h-0-007",
              "libelleOption": "Meeting Room"
            },
  
            {
              "id": "ev-h-0-008",
              "libelleOption": "Salle de sport"
            }
          ]
        },
        {
          "id": "ev-h-001",
          "villeLogement": "Yaounde",
          "nomLogement": "Hilton Hôtel",
          "nbrEtoileLogement": 5,
          "priceLogement": 35000,
          "currencyLogement": "XAF",
          "imgLogement": "../../../assets/img/hotels/hilton.jpeg",
          "optionLogement": [
            {
              "id": "ev-h-0-001",
              "libelleOption": "Piscine"
            },
  
            {
              "id": "ev-h-0-002",
              "libelleOption": "Free Wifi"
            },
  
            {
              "id": "ev-h-0-003",
              "libelleOption": "Non-Fumeur"
            },
  
            {
              "id": "ev-h-0-004",
              "libelleOption": "Animaux interdits"
            }
          ]
        },
        {
          "id": "ev-h-001",
          "villeLogement": "Yaounde",
          "nomLogement": "Hilton Hôtel",
          "nbrEtoileLogement": 5,
          "priceLogement": 35000,
          "currencyLogement": "XAF",
          "imgLogement": "../../../assets/img/hotels/hilton.jpeg",
          "optionLogement": [
            {
              "id": "ev-h-0-001",
              "libelleOption": "Piscine"
            },
  
      
            {
              "id": "ev-h-0-006",
              "libelleOption": "parking Gratuit"
            },
  
            {
              "id": "ev-h-0-007",
              "libelleOption": "Meeting Room"
            },
  
            {
              "id": "ev-h-0-008",
              "libelleOption": "Salle de sport"
            }
          ]
        },
        {
          "id": "ev-h-001",
          "villeLogement": "Yaounde",
          "nomLogement": "Hilton Hôtel",
          "nbrEtoileLogement": 5,
          "priceLogement": 35000,
          "currencyLogement": "XAF",
          "imgLogement": "../../../assets/img/hotels/hilton.jpeg",
          "optionLogement": [
            {
              "id": "ev-h-0-001",
              "libelleOption": "Piscine"
            },
  
            {
              "id": "ev-h-0-002",
              "libelleOption": "Free Wifi"
            },
  
            {
              "id": "ev-h-0-003",
              "libelleOption": "Non-Fumeur"
            },
  
            {
              "id": "ev-h-0-004",
              "libelleOption": "Animaux interdits"
            },
  
            {
              "id": "ev-h-0-005",
              "libelleOption": "Room Service"
            },
  
            {
              "id": "ev-h-0-006",
              "libelleOption": "parking Gratuit"
            },
  
            {
              "id": "ev-h-0-007",
              "libelleOption": "Meeting Room"
            },
  
            {
              "id": "ev-h-0-008",
              "libelleOption": "Salle de sport"
            }
          ]
        },
        {
          "id": "ev-h-001",
          "villeLogement": "Yaounde",
          "nomLogement": "Hilton Hôtel",
          "nbrEtoileLogement": 5,
          "priceLogement": 35000,
          "currencyLogement": "XAF",
          "imgLogement": "../../../assets/img/hotels/hilton.jpeg",
          "optionLogement": [
            {
              "id": "ev-h-0-001",
              "libelleOption": "Piscine"
            },
  
            {
              "id": "ev-h-0-002",
              "libelleOption": "Free Wifi"
            },
  
            {
              "id": "ev-h-0-003",
              "libelleOption": "Non-Fumeur"
            },
  
            {
              "id": "ev-h-0-004",
              "libelleOption": "Animaux interdits"
            },
  
            {
              "id": "ev-h-0-005",
              "libelleOption": "Room Service"
            },
  
            {
              "id": "ev-h-0-006",
              "libelleOption": "parking Gratuit"
            },
  
            {
              "id": "ev-h-0-007",
              "libelleOption": "Meeting Room"
            },
  
            {
              "id": "ev-h-0-008",
              "libelleOption": "Salle de sport"
            }
          ]
        }
      ];
    }




    return this.logements;

      //  return this.httpRequest.get("https://sam-man-portfolio-backend.herokuapp.com/mail"); 

  }
}
