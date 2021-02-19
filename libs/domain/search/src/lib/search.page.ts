import { Item } from '@ab/models';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { SearchService } from './data/search.service';

@Component({
  templateUrl: './search.page.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPage implements OnInit {
  items$!: Observable<Item[]>;

  constructor(private route: ActivatedRoute, private service: SearchService) {}

  ngOnInit(): void {
    this.switchSubscription();
    //this.getNewSubscriptionWhenRouteChanges();
  }

  private switchSubscription() {
    this.items$ = this.route.queryParams.pipe(
      map((queryParams) => queryParams.term),
      distinctUntilChanged(),
      switchMap((term) => this.service.getByQuery$(term))
    );
  }

  private getNewSubscriptionWhenRouteChanges() {
    this.route.queryParams
      .pipe(
        map((queryParams) => queryParams.term),
        distinctUntilChanged()
      )
      .subscribe({
        next: (term) => {
          this.items$ = this.service.getByQuery$(term);
        },
      });
  }
}
