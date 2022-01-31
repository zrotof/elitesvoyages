import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/cars/car.service';
import { faEllipsisV} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-cars',
  templateUrl: './home-cars.component.html',
  styleUrls: ['./home-cars.component.scss']
})
export class HomeCarsComponent implements OnInit {

  faEllipsisV = faEllipsisV;

  //variables for popular cars caroussel
  popularCars: Car[] = [];

  //variables for popular fights caroussel
  carsResponsiveOptions : any;

  constructor(private carService: CarService) { 
    this.carsResponsiveOptions = [
      {
          breakpoint: '1178px',
          numVisible: 3,
          numScroll: 1
      },
      {
          breakpoint: '914px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '675px',
          numVisible: 1,
          numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    this.getPopularCars();
  }

  //get data for flights caroussel
  getPopularCars(){
    this.popularCars = this.carService.getCarsForCarrousel();
  }

}
