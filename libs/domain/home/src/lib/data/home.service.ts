import { Category, Item } from '@ab/data';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { viewModes } from '../models/viewModes';

@Injectable({ providedIn: 'root' })
export class HomeService {
  constructor(private http: HttpClient) {}
  getCategories$(viewMode: viewModes) {
    const url = 'https://angularbuilders-pre.herokuapp.com/api/v1/categories';
    return this.http
      .get<Category[]>(url)
      .pipe(map((data) => this.mapCategoryResults(data, viewMode)));
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

  private mapCategoryResults(categories: Category[], viewMode: viewModes) {
    return categories.sort((a, b) => {
      if (viewMode === viewModes.sortAddedDate) {
        return 0;
      } else {
        return a.name.localeCompare(b.name);
      }
    });
  }
  private mapGetTop(items: Item[], top: number) {
    return items.slice(0, top);
  }
}
