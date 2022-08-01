import { Component, OnDestroy, OnInit } from '@angular/core';

import { faPlane, faBed, faCarSide, faHome, faEllipsisV, faCubes, faChevronLeft, faChevronRight, faGlobeAfrica } from '@fortawesome/free-solid-svg-icons';
import { Employee } from 'src/app/models/employee';
import { EmmployeeService } from 'src/app/services/employee/emmployee.service';

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


  employeesList:Employee[] = [];

  constructor(
    private employeeService: EmmployeeService
  ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this.employeeService.getEmployeesList().subscribe(
      result =>{
        this.employeesList = result;
      }
    )
  }


}
