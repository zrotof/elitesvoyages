import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TourismService {

  constructor() { }

  topTourism(){
    return [

      {
        title: "7 Nuits et 8 Jours à Dubaî",
        country: "Emirates Arabes Unis",
        description:"Que vous soyez seul ou en couple ne manquez pas cette opportunité de visiter et découvrir la ville de Dubaî.",
        dates: "Mars 2022 - Juillet 2022",
        currency: "XAF",
        price: 800000,
        img:"../../../assets/img/home/tourism/dubai.jpeg",
        link: ""
      },
      
      {
        title: "3 Nuits et 4 Jours au Caire",
        country: "Egypte",
        description:"Que vous soyez seul ou en couple ne manquez pas cette opportunité de visiter et découvrir la ville de Dubaî.",
        dates: "Mars 2022 - Juillet 2022",
        currency: "XAF",
        price: 450000,
        img:"../../../assets/img/home/tourism/caire.jpeg",
        link: ""
      },
      {
        title: "7 Nuits et 8 Jours à Dubaî",
        country: "Emirates Arabes Unis",
        description:"Que vous soyez seul ou en couple ne manquez pas cette opportunité de visiter et découvrir la ville de Dubaî.",
        dates: "Mars 2022 - Juillet 2022",
        currency: "XAF",
        price: 800000,
        img:"../../../assets/img/home/tourism/dubai.jpeg",
        link: ""
      },
      
      {
        title: "3 Nuits et 4 Jours au Caire",
        country: "Egypte",
        description:"Que vous soyez seul ou en couple ne manquez pas cette opportunité de visiter et découvrir la ville de Dubaî.",
        dates: "Mars 2022 - Juillet 2022",
        currency: "XAF",
        price: 450000,
        img:"../../../assets/img/home/tourism/caire.jpeg",
        link: ""
      },
      {
        title: "7 Nuits et 8 Jours à Dubaî",
        country: "Emirates Arabes Unis",
        description:"Que vous soyez seul ou en couple ne manquez pas cette opportunité de visiter et découvrir la ville de Dubaî.",
        dates: "Mars 2022 - Juillet 2022",
        currency: "XAF",
        price: 800000,
        img:"../../../assets/img/home/tourism/dubai.jpeg",
        link: ""
      },
      
      {
        title: "3 Nuits et 4 Jours au Caire",
        country: "Egypte",
        description:"Que vous soyez seul ou en couple ne manquez pas cette opportunité de visiter et découvrir la ville de Dubaî.",
        dates: "Mars 2022 - Juillet 2022",
        currency: "XAF",
        price: 450000,
        img:"../../../assets/img/home/tourism/caire.jpeg",
        link: ""
      }
      
    ]
  }
}
