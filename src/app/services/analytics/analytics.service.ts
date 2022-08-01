import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from '../../../environments/environment';

declare var pa: any;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private router: Router) { }

  initialize(){

    this.trackEventOnRouteChange();


    // dynamically add analytics scripts to document head
    try {

      const analyticsScript = document.createElement('script');      
      analyticsScript.src = "https://microanalytics.io/js/script.js";
      analyticsScript.async = true;
      analyticsScript.defer = true;
      analyticsScript.id = environment.MICROANALYTICS_ID;
      analyticsScript.innerHTML = `data-host="https://microanalytics.io" data-dnt="false"`
      document.head.appendChild(analyticsScript);
    
    } catch (e) {
      console.error('Error adding Google Analytics', e);
    }

  }


  trackEventOnRouteChange(){
    this.router.events.subscribe(
      (event) =>{
        if(event instanceof NavigationEnd){
          pa.track({name: event.urlAfterRedirects})
        }
      }
    )
  }
}