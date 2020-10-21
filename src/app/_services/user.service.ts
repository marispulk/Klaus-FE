import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_shared/user';
import { baseURL } from "../_shared/baseurl";

import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(baseURL + 'users');
  }
}
