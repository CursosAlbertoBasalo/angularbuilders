import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiArray } from './ApiArray';
import { Category } from './Category';
import { Item } from './Item';

@Injectable()
export class HomeService {
  constructor(private http: HttpClient) {}
  getCategories$() {
    const url = 'https://angularbuilders-pre.herokuapp.com/api/v1/categories';
    return this.http
      .get<ApiArray<Category>>(url)
      .pipe(map((results: ApiArray<Category>) => results.data));
  }
  getFeatured$() {
    const url = 'https://angularbuilders-pre.herokuapp.com/api/v1/items';

    return this.http.get<ApiArray<Item>>(url).pipe(
      map((results: ApiArray<Item>) => results.data),
      map((data: Item[]) => data.slice(0, 3))
    );
  }
}
