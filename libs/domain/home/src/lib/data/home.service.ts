import { Category, Item } from '@ab/data';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CategoryHome } from '../models/categoryHome';
import { viewModes } from '../models/viewModes';

@Injectable({ providedIn: 'root' })
export class HomeService {
  constructor(private http: HttpClient) {}
  getCategories$(viewMode: viewModes) {
    const url = 'https://angularbuilders-pre.herokuapp.com/api/v1/categories';
    return this.http.get<Category[]>(url);
    //.pipe(map((data) => this.mapCategoryResults(data, viewMode)));
  }
  getCountItemsByCategoryId$(categoryId: string) {
    const url = `https://angularbuilders-pre.herokuapp.com/api/v1/categories/${categoryId}/items/count`;
    return this.http.get<number>(url);
  }

  getFeatured$() {
    const url = 'https://angularbuilders-pre.herokuapp.com/api/v1/items';
    return this.http
      .get<Item[]>(url)
      .pipe(map((data) => this.mapGetTop(data, 3)));
  }

  sortCategories(categories: CategoryHome[], viewMode: viewModes) {
    return categories.sort((a, b) => {
      switch (viewMode) {
        case viewModes.sortAddedDate:
          return 0;
        case viewModes.sortName:
          return a.name.localeCompare(b.name);
        case viewModes.sortCounter:
          return (a.itemsCount || 0) - (b.itemsCount || 0);
        default:
          return 0;
      }
    });
  }
  private mapGetTop(items: Item[], top: number) {
    return items.slice(0, top);
  }
}
