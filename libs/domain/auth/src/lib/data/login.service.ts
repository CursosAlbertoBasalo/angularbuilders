import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  postCredentials$(credentials: unknown) {
    const url = `https://angularbuilders-pre.herokuapp.com/api/v1/users`;
    return this.http.post<any>(url, credentials);
  }
}
