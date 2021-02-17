import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

interface ApiArray {
  data: unknown[];
}

@Injectable()
export class HomeService {
  constructor(private http: HttpClient) {}
  getCategories$() {
    const url = 'https://angularbuilders-pre.herokuapp.com/api/v1/categories';
    return this.http
      .get<ApiArray>(url)
      .pipe(map((results: ApiArray) => results.data));
  }
  getFeatured$() {
    const url = 'https://angularbuilders-pre.herokuapp.com/api/v1/items';

    return this.http.get<ApiArray>(url).pipe(
      map((results: ApiArray) => results.data),
      map((data: unknown[]) => data.slice(0, 3))
    );
  }
}
