import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from './data/home.service';
import { Category } from './models/Category';
import { Item } from './models/Item';
import { viewModes } from './models/viewModes';

@Component({
  templateUrl: './home.page.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  categories$: Observable<Category[]>;
  categories!: Category[];
  featured$: Observable<Item[]>;
  featured!: Item[];

  constructor(private service: HomeService) {
    this.categories$ = service.getCategories$(viewModes.sortAddedDate);
    this.featured$ = service.getFeatured$();
  }

  changeViewMode(viewMode: viewModes) {
    this.categories$ = this.service.getCategories$(viewMode);
  }

  setCategories(data: unknown) {
    this.categories = data as Category[];
  }
  setFeatured(data: unknown) {
    this.featured = data as Item[];
  }
}
