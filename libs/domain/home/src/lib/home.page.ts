import { Item } from '@ab/data';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { filter, map, mergeMap, tap } from 'rxjs/operators';
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
    this.categories$ = this.store.getState$().pipe(
      tap({ next: (state) => this.fillCounter(state.categories) }),
      map((state) => state.categories)
    );
    this.getCategoriesSorted(viewModes.sortAddedDate);
    this.featured$ = service.getFeatured$();
  }
  fillCounter(categories: CategoryHome[]) {
    from(categories)
      .pipe(
        filter((c) => c.itemsCount === 0),
        mergeMap((category) =>
          this.service
            .getCountItemsByCategoryId$(category.id)
            .pipe(map((itemsCount) => ({ ...category, itemsCount })))
        )
      )
      .subscribe({
        next: (x) => this.store.setCategory(x),
      });
  }

  changeViewMode(viewMode: viewModes) {
    const categories = this.store.getState().categories;
    this.service.sortCategories(categories, viewMode);
    this.categories$ = of(categories);
  }
  getCategoriesSorted(viewMode: viewModes) {
    this.service
      .getCategories$(viewMode)
      .pipe(
        map((categories) =>
          categories.map((category) => ({ ...category, itemsCount: 0 }))
        ),
        map((categoriesHome) =>
          this.service.sortCategories(categoriesHome, viewMode)
        )
      )
      .subscribe({
        next: (categories) => this.store.setCategories(categories),
      });
  }
}
