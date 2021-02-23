import { Category, Item } from '@ab/data';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { ApiObject, ApiArray, Category , Item } from '@ab/data';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getById$(id: string) {
    const url = `https://angularbuilders-pre.herokuapp.com/api/v1/categories/${id}`;
    return this.http.get<Category>(url);
  }

  getItemsById$(id: string) {
    const url = `https://angularbuilders-pre.herokuapp.com/api/v1/categories/${id}/items`;
    return this.http.get<Item[]>(url);
  }
}
