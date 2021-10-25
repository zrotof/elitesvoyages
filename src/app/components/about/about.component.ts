import { Component, OnInit } from '@angular/core';

import { faPlane, faBed, faCarSide, faHome, faEllipsisV, faCubes, faChevronLeft, faChevronRight, faGlobeAfrica } from '@fortawesome/free-solid-svg-icons'

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


  constructor() { }

  ngOnInit(): void {
  }

}
