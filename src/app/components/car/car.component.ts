import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  //Setting variables for the range slider
  value: number = 30000;
  highValue: number = 170000;

  options: Options = {
    floor: 30000,
    ceil: 170000,
    step:500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + " XAF" ;
        case LabelType.High:
          return value + " XAF";
        default:
          return  "";
      }
    }
  };



  constructor() { }

  ngOnInit(): void {
  }

}
