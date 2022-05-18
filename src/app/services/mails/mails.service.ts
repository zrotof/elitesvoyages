import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailsService {

  constructor(private http: HttpClient) { }

  sendContactMail(data: any){

    
    let headers = {
      headers : new HttpHeaders({
        'Content-Type':"application/json"
      })
    };
    
    //return this.http.post("https://sam-man-portfolio-backend.herokuapp.com/mail", mailInfo, headers); 
    return this.http.post("http://localhost:3000/mail/contact", data, headers); 
  }

  sendFlightMail(data: any){
    return this.http.post("http://localhost:3000/mail/flight", data); 
  }

  sendDhlMail(data: any){
    return this.http.post("http://localhost:3000/mail/dhl", data)
  }

  sendCarMail(data: any){
    return this.http.post("http://localhost:3000/mail/car", data)
  }

  sendApartMail(data: any){
    return this.http.post("http://localhost:3000/mail/apart", data)
  }

  sendHostelMail(data: any){
    return this.http.post("http://localhost:3000/mail/hostel", data)
  }
}
