import { Component, OnInit } from '@angular/core';
import { faHeart, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-spotlighted-deal',
  templateUrl: './home-spotlighted-deal.component.html',
  styleUrls: ['./home-spotlighted-deal.component.scss']
})
export class HomeSpotlightedDealComponent implements OnInit {

  faHeart = faHeart;
  faUsers = faUsers;
  
  constructor() { }

  ngOnInit(): void {
  }

}
