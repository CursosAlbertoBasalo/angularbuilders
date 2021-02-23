import { Category, Item } from '@ab/data';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from './data/home.service';
import { viewModes } from './models/viewModes';

@Component({
  templateUrl: './home.page.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  categories$: Observable<Category[]>;
  featured$: Observable<Item[]>;

  constructor(private service: HomeService) {
    this.categories$ = service.getCategories$(viewModes.sortAddedDate);
    this.featured$ = service.getFeatured$();
  }

  changeViewMode(viewMode: viewModes) {
    this.categories$ = this.service.getCategories$(viewMode);
  }
}
