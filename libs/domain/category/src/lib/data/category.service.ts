import { ApiArray, ApiObject, Category, Item } from '@ab/data';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
// import { ApiObject, ApiArray, Category , Item } from '@ab/data';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getById$(id: string) {
    const url = `https://angularbuilders-pre.herokuapp.com/api/v1/categories/${id}`;
    return this.http
      .get<ApiObject<Category>>(url)
      .pipe(map((results) => results.data));
  }

  getItemsById$(id: string) {
    const url = `https://angularbuilders-pre.herokuapp.com/api/v1/categories/${id}/items`;
    return this.http
      .get<ApiArray<Item>>(url)
      .pipe(map((results) => results.data));
  }
}
