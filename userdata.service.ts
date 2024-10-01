import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  url: string = "http://localhost:8080/api/user";

  httpOption = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  signUp(user: User): Observable<any> {
    return this.http.post(`${this.url}/sign-up`, user);
  }

  signIn(user: any): Observable<any> {
    return this.http.post(`${this.url}/sign-in`, user);
  }
}
