import { Item } from '@ab/data';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private http: HttpClient) {}
  getItemById$(id: string) {
    const url = `https://angularbuilders-pre.herokuapp.com/api/v1/items/${id}`;
    return this.http.get<Item>(url);
  }
}
