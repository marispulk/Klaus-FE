import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_shared/user';
import { baseURL } from "../_shared/baseurl";

import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(baseURL + 'users');
  }

  deleteUser(user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    return this.http.delete<User>(baseURL + 'users' + `/${id}`);
  }

}
