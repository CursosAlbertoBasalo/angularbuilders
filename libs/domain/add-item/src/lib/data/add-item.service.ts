import { Category, Item } from '@ab/data';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddItemService {
  constructor(private http: HttpClient) {}
  postItem$(item: Item) {
    const url = `https://angularbuilders-pre.herokuapp.com/api/v1/items/`;
    return this.http.post<Item>(url, item);
  }
  getCatergories$() {
    const url = `https://angularbuilders-pre.herokuapp.com/api/v1/categories/`;
    return this.http.get<Category[]>(url);
  }
}
