import { Component, OnInit } from '@angular/core';

//importing fontawesome icons
import { faBuilding, faEnvelope, faPhoneAlt, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  faBuilding = faBuilding;
  faEnvelope = faEnvelope;
  faPhoneAlt = faPhoneAlt;
  faMapMarkerAlt = faMapMarkerAlt;
  faClock = faClock;

  constructor() { }

  ngOnInit(): void {
  }

}
