import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailsService {

  headers = {
    headers : new HttpHeaders({
      'Content-Type':"application/json"
    })
  };

  constructor(private http: HttpClient) { }

  sendContactMail(data: any ) : Observable<any>{
    return this.http.post("https://api.elites-voyages.com/mail/contact", data, this.headers); 
  }

  sendFlightMail(data: any) : Observable<any>{
    return this.http.post("https://api.elites-voyages.com/mail/flight", data, this.headers); 
  }
  
  sendDhlMail(data: any) : Observable<any>{
    return this.http.post("https://api.elites-voyages.com/mail/dhl", data, this.headers)
  }

  sendCarMail(data: any) : Observable<any>{
    return this.http.post("https://api.elites-voyages.com/mail/car", data, this.headers)
  }

  sendApartMail(data: any) : Observable<any>{
    return this.http.post("https://api.elites-voyages.com/mail/apart", data, this.headers)
  }

  sendHostelMail(data: any) : Observable<any>{
    return this.http.post("https://api.elites-voyages.com/mail/hostel", data , this.headers)
  }

  //Function use for booking a car in paris
  sendCarParisMail(data: any) : Observable<any>{
    return this.http.post("https://api.elites-voyages.com/mail/car-paris", data, this.headers)
  }

  //Function use for booking a car in paris
  sendTourMail(data: any) : Observable<any>{
    return this.http.post("https://api.elites-voyages.com/mail/tour", data, this.headers)
  }

  addCustomerToNewsletter(data: any) : Observable<any>{
    //return this.http.post("https://api.elites-voyages.com/mail/newsletter", data, this.headers)
    return this.http.post("http://localhost:3000/mail/newsletter", data, this.headers)

  }
}
