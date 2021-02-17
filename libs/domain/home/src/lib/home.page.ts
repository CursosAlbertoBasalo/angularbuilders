import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from './home.service';

@Component({
  templateUrl: './home.page.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  categories$: Observable<unknown[]>;
  featured$: Observable<unknown[]>;

  constructor(private service: HomeService) {
    this.categories$ = service.getCategories$();
    this.featured$ = service.getFeatured$();
  }
}
