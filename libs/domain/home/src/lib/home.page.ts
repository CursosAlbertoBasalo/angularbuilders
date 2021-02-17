import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './Category';
import { HomeService } from './home.service';
import { Item } from './Item';

@Component({
  templateUrl: './home.page.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  categories$: Observable<Category[]>;
  featured$: Observable<Item[]>;

  constructor(private service: HomeService) {
    this.categories$ = service.getCategories$();
    this.featured$ = service.getFeatured$();
  }
}
