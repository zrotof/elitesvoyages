import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private router : Router) {  }

  ngOnInit(): void {
  }

  redirectWithData(param: any){
    
    this.router.navigateByUrl('/hostel-apartment', { state: {parameter: param} })

  }

}
