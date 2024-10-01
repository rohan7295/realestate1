import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyserviceService {
  private url: string = "http://localhost:8080/api/properties";

  constructor(private http: HttpClient) { }


  addproperty(property: any): Observable<any> {
    return this.http.post(`${this.url}/save`, property);
  }

  deleteProperty(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/delete/${id}`);
  }
}
