import { Item } from '@ab/models';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './item.page.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemPage {
  item: Item;
  constructor(route: ActivatedRoute) {
    this.item = route.snapshot.data.item;
  }
}
