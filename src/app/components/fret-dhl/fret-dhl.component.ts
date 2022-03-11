import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fret-dhl',
  templateUrl: './fret-dhl.component.html',
  styleUrls: ['./fret-dhl.component.scss']
})
export class FretDhlComponent implements OnInit {

  contains: any = [ 
    "documents uniquement", "documents et autres"
  ];

  formats: any = [ 
    "Enveloppe A4", "Je ne connais pas"
  ]

  constructor() { }

  ngOnInit(): void {
  }

changeReason(e: any){

}
}
