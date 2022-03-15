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
        name: "Irène",
        image: "../../../assets/img/about/pauline.png",
        work: "Responsable d'agence"
      },
      {
        name: "Esther",
        image: "../../../assets/img/about/esther.png",
        work: "Responsable d'agence"
      },
      {
        name: "Horlande BAKOM",
        image: "../../../assets/img/about/horlande.png",
        work: "Poste"
      },
      {
        name: "Carole ABOUANG",
        image: "../../../assets/img/about/carole.png",
        work: "Poste"
      },
      {
        name: "Christelle",
        image: "../../../assets/img/about/christelle.png",
        work: "Poste"
      },
      {
        name: "Valentin",
        image: "../../../assets/img/about/valentin.png",
        work: "Poste"
      },
      {
        name: "Patrick GOUATER",
        image: "../../../assets/img/about/patrick.png",
        work: "Stagiaire"
      },
      {
        name: "Paul",
        image: "../../../assets/img/about/about-woman-black.png",
        work: "Poste"
      },
      {
        name: "Samuel MANDENG",
        image: "../../../assets/img/about/about-woman-black.png",
        work: "PDG"
      }
      

    ]
  }

}
