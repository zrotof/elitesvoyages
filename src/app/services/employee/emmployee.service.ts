import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/app/models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmmployeeService {

  constructor(private http: HttpClient) { }

  getEmployeesList() : Observable<Employee[]>{
    return this.http.get<Employee[]>("https://api.elites-voyages.com/employe/list");
  }
}
