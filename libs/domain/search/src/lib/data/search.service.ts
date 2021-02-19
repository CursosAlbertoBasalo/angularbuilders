import { ApiArray, Item } from '@ab/data';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  getByQuery$(searchTerm: string) {
    // console.log(searchTerm);
    const term = searchTerm.toLocaleLowerCase();
    // ToDo: whats happening here?
    const url = 'https://angularbuilders-pre.herokuapp.com/api/v1/items';
    return this.http.get<ApiArray<Item>>(url).pipe(
      map((results) => results.data),
      map((data) => data.filter((i) => this.byTerm(i, term)))
    );
  }

  byTerm(item: Item, searchTerm: string) {
    // console.log(searchTerm, item);
    if (item.name.toLocaleLowerCase().includes(searchTerm)) return true;
    if (item.description?.toLocaleLowerCase().includes(searchTerm)) return true;
    return false;
  }
}
