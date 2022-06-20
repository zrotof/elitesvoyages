import { Component, OnInit } from '@angular/core';

import { faPlane, faBed, faCarSide, faHome, faEllipsisV, faCubes, faChevronLeft, faChevronRight, faGlobeAfrica } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {


  faPlane = faPlane;
  faBed = faBed;
  faCarSide = faCarSide;
  faHome = faHome;
  faEllipsisV = faEllipsisV;
  faCubes = faCubes;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faGlobeAfrica = faGlobeAfrica;


  employeesList:any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this.employeesList = [
      {
        name: "Irène NGO BALA",
        image: "../../../assets/img/about/pauline.png",
        work: "Resp d'agence Douala"
      },
      {
        name: "Esther KOUMBELECK",
        image: "../../../assets/img/about/esther.png",
        work: "Resp d'agence Yaoundé"
      },
      {
        name: "Horlande BAKOM",
        image: "../../../assets/img/about/horlande.png",
        work: "Agent comptoir"
      },
      {
        name: "Carole ABOUANG",
        image: "../../../assets/img/about/carole.png",
        work: "Agent comptoir"
      },
      {
        name: "Christelle ONGBALOUEK",
        image: "../../../assets/img/about/christelle.png",
        work: "Agent comptoir"
      },
      {
        name: "Valentin ABENG",
        image: "../../../assets/img/about/valentin.png",
        work: "Agent comptoir"
      },
      {
        name: "Claire HAMBO",
        image: "../../../assets/img/about/about-woman-black.png",
        work: "Commerciale"
      },
      {
        name: "Pascal PONDI",
        image: "../../../assets/img/about/pascal.png",
        work: "Commercial"
      },
      {
        name: "Samuel MANDENG",
        image: "../../../assets/img/about/samuel.png",
        work: "PDG"
      }
      

    ]
  }

}
