import { Item } from '@ab/data';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { from, Observable } from 'rxjs';
import { filter, mergeMap, tap } from 'rxjs/operators';
import { CategoriesStore } from './data/categories.store';
import { HomeService } from './data/home.service';
import { CategoryHome } from './models/categoryHome';
import { viewModes } from './models/viewModes';

@Component({
  templateUrl: './home.page.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  categories$: Observable<CategoryHome[]>;
  featured$: Observable<Item[]>;

  constructor(private service: HomeService, private store: CategoriesStore) {
    this.categories$ = this.store
      .getState$()
      .pipe(tap({ next: (categories) => this.fillCounter(categories) }));
    this.getCategoriesSorted(viewModes.sortAddedDate);
    this.featured$ = service.getFeatured$();
  }
  fillCounter(categories: CategoryHome[]) {
    from(categories)
      .pipe(
        filter((c) => c.itemsCount === undefined),
        mergeMap(
          (category) => this.service.getCountItemsByCategoryId$(category.id),
          (category, itemsCount) => ({ ...category, itemsCount })
        )
      )
      .subscribe({
        next: (x) => this.store.setCategory(x),
      });
  }

  changeViewMode(viewMode: viewModes) {
    this.getCategoriesSorted(viewMode);
  }
  getCategoriesSorted(viewMode: viewModes) {
    this.service.getCategories$(viewMode).subscribe({
      next: (categories) => this.store.setCategories(categories),
    });
  }
}
