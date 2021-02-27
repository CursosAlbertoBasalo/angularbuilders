import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Registration } from '../models/registration';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  postCredentials$(credentials: Registration) {
    const url = `https://angularbuilders-pre.herokuapp.com/api/v1/users`;
    return this.http.post<User>(url, credentials);
  }
}
