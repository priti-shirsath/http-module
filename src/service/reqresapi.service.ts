import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private serviceUrl = 'https://reqres.in/api/users';
  //private serviceUrl = 'https://random-data-api.com/api/users/random_user?size=10';
  constructor(private http: HttpClient) {}
  
  public getUsers(): Observable<any> {
    const url = 'https://reqres.in/api/users?page=1';
    return this.http.get<any>(url);
}

  getRandomUsers(): Observable<User> {
    const URL = `${this.serviceUrl}`;
    return this.http.get<User>(URL);
   }
}