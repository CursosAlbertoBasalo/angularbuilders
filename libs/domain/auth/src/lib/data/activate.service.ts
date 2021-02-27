import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Activation } from '../models/activation';

@Injectable({
  providedIn: 'root',
})
export class ActivateService {
  constructor(private http: HttpClient) {}

  putActivation$(activation: Activation) {
    const url = `https://angularbuilders-pre.herokuapp.com/api/v1/users/activations?uat=${activation.uat}`;
    return this.http.put<string>(url, {});
  }
}
