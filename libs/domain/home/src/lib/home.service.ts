import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiArray } from './ApiArray';

@Injectable()
export class HomeService {
  constructor(private http: HttpClient) {}
  getCategories$() {
    const url = 'https://angularbuilders-pre.herokuapp.com/api/v1/categories';
    return this.http
      .get<ApiArray<unknown>>(url)
      .pipe(map((results: ApiArray<unknown>) => results.data));
  }
  getFeatured$() {
    const url = 'https://angularbuilders-pre.herokuapp.com/api/v1/items';

    return this.http.get<ApiArray<unknown>>(url).pipe(
      map((results: ApiArray<unknown>) => results.data),
      map((data: unknown[]) => data.slice(0, 3))
    );
  }
}
