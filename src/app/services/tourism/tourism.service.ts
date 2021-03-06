import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { faShuttleVan, faBed, faPlaneDeparture, faPassport, faMugHot } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

import { GeneralTour, TopTour, SpotlightedTour } from '../../models/tourism';
@Injectable({
  providedIn: 'root'
})
export class TourismService {

  faShuttleVan = faShuttleVan;
  faBed = faBed;
  faPlaneDeparture = faPlaneDeparture;
  faPassport = faPassport;
  faMugHot = faMugHot;

  constructor(private http: HttpClient) { }

  showcasedTopTours() : Observable<TopTour[]>{
    return this.http.get<TopTour[]>("https://api.elites-voyages.com/tourisme/showcased");
  }

  getPromotedTours(): Observable<TopTour[]>{
    return this.http.get<TopTour[]>("https://api.elites-voyages.com/tourisme/showcased");
  }

  generalDataTourList(): Observable<GeneralTour[]>{
    return this.http.get<GeneralTour[]>("https://api.elites-voyages.com/tourisme/allsummary");
  }

  getTourById(id: string){
    return this.http.get("https://api.elites-voyages.com/tourisme/"+id);
  }

  getSpotlightedTours(): Observable<SpotlightedTour[]>{
    return this.http.get<SpotlightedTour[]>("https://api.elites-voyages.com/tourisme/spotlighted");
  }
}
