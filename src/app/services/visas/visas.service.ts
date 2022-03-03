import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisasService {

  constructor() { }

  //Function that retrieve all visa menu header
  getVisaMenuList(){
    return [
      {name: "Visa Dubaî"},
      {name: "Visa pays d'Afrique"},
      {name: "Visa pays d'Europe"},
      {name: "Visa pays d'Amerique"}
    ]
  }


  //Function that retrieve visa information for dubai
  getDubai(){
    return [
      {
        many: false,
        name: "Visa Dubaî",
        flag: "../../../assets/img/visa&Assis/flags/uae-flag.gif",
        country: "Dubaî",
        visas: [
          {
            type: "Pièces à fournir pour visa touristique",
            delais: "délivré en 48h express",
            pieces: [
              {libelle: "Copie couleur du passport en cours de validité (6 mois à la date du retour du voyage)"},
              {libelle: "Copie couleur demi carte photo récentes 4×4"}
            ],
            frais:[
              {
                libelle: "Frais de visa un (01) mois + assurance voyage:",
                prix: "74500"
              },
              {
                libelle: "Frais de visa trois (03) mois + assurance voyage:",
                prix: "221500"
              }
            ],
            indication: "NB: Il peut etre demandé de fournir une caution le cas échéant"

          }
        ]
      }
    ]
  }

  //Function that retrieve visa information for america countries
  getAmerique(){
    return [
      {
        many: true,
        flag: "../../../assets/img/visa&Assis/flags/usa-flag.gif",
        country: "Amérique"
      },
      {
        flag: "../../../assets/img/visa&Assis/flags/bra-flag.gif",
        country: "Brézil"
      },
      {
        flag: "../../../assets/img/visa&Assis/flags/can-flag.gif",
        country: "Canada"
      }
    ]
  }

  //Function that retrieve visa information for african countries
  getAfrique(){
    return [
      {
        flag: "../../../assets/img/visa&Assis/flags/cmr-flag.gif",
        country: "Cameroun"
      },
      {
        many: true,
        flag: "../../../assets/img/visa&Assis/flags/civ-flag.gif",
        country: "Côte d'Ivoire",
        general: [
          {
            libelle: "Formulaire de demande de visa à remplir (on peut télécharger le fichier PDF du site de l’Ambassade et le télécharger sur la page afin de permettre à celui qui visite de le télécharger et de le remplir)"
          },
          {
            libelle: "photo d’identité tirée à fond blanc"
          },
          {
            libelle: "Assurance voyage NSIA"
          },
          {
            libelle: "Billet d’avion"
          },
          {
            libelle: "Photocopie du passeport et CNI"
          }
        ],
        visas: [
          {
            type: "Pièces à fournir pour visa touristique",
            delais: "délivré en 48h express",
            pieces: [
              {libelle: "Copie couleur du passport en cours de validité (6 mois à la date du retour du voyage)"},
              {libelle: "Copie couleur demi carte photo récentes 4×4"}
            ],
            frais:[
              {
                libelle: "Frais de visa un (01) mois + assurance voyage:",
                prix: "74500"
              },
              {
                libelle: "Frais de visa trois (03) mois + assurance voyage:",
                prix: "221500"
              }
            ],
            indication: "NB: Il peut etre demandé de fournir une caution le cas échéant"

          },
          {
            type: "Pièces à fournir pour mission",
            delais: "délivré en 48h express",
            pieces: [
              {libelle: "Ordre de mission"},
              {libelle: "Certificat de travail"}
            ],
            frais:[
              {
                libelle: "Frais de visa un (01) mois + assurance voyage:",
                prix: "74500"
              },
              {
                libelle: "Frais de visa trois (03) mois + assurance voyage:",
                prix: "221500"
              }
            ],
            indication: "NB: Il peut etre demandé de fournir une caution le cas échéant"

          },
          {
            type: "Pièces à fournir pour tourisme",
            delais: "délivré en 48h express",
            pieces: [
              {libelle: "Justificatif des moyens de subsistance"},
              {libelle: "Réservation d’hôtel sur du papier à entête de l’hôtel"}
            ],
            frais:[
              {
                libelle: "Frais de visa un (01) mois + assurance voyage:",
                prix: "74500"
              },
              {
                libelle: "Frais de visa trois (03) mois + assurance voyage:",
                prix: "221500"
              }
            ],
            indication: "NB: Il peut etre demandé de fournir une caution le cas échéant"

          },
          {
            type: "Pièces à fournir pour les commerçants",
            delais: "délivré en 48h express",
            pieces: [
              {libelle: "Photocopie du titre de patenteP"},
              {libelle: "hotocopie du registre de commerce"}
            ],
            frais:[
              {
                libelle: "Frais de visa un (01) mois + assurance voyage:",
                prix: "74500"
              },
              {
                libelle: "Frais de visa trois (03) mois + assurance voyage:",
                prix: "221500"
              }
            ],
            indication: "NB: Il peut etre demandé de fournir une caution le cas échéant"

          }

        ]
      },
      {
        flag: "../../../assets/img/visa&Assis/flags/egy-flag.gif",
        country: "Egypte"
      }
      ,
      {
        flag: "../../../assets/img/visa&Assis/flags/eth-flag.gif",
        country: "Ethiopie"
      },
      {
        flag: "../../../assets/img/visa&Assis/flags/mad-flag.gif",
        country: "Madagascar"
      },
      {
        flag: "../../../assets/img/visa&Assis/flags/mar-flag.gif",
        country: "Maroc"
      },
      {
        flag: "../../../assets/img/visa&Assis/flags/sen-flag.gif",
        country: "Sénégal"
      },
      {
        flag: "../../../assets/img/visa&Assis/flags/tun-flag.gif",
        country: "Tunisie"
      }
    ]
  }

  //Function that retrieve visa information for europian countries
  getEurope(){
    return [

      {
        flag: "../../../assets/img/visa&Assis/flags/all-flag.gif",
        country: "Allemagne"
      },
      {
        flag: "../../../assets/img/visa&Assis/flags/bel-flag.gif",
        country: "Belgique"
      },
      {
        flag: "../../../assets/img/visa&Assis/flags/fr-flag.gif",
        country: "France"
      }
    ]
  }

}
