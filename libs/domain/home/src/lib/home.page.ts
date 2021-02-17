import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './Category';
import { HomeService } from './home.service';
import { Item } from './Item';
import { viewModes } from './view-mode/viewModes';

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
