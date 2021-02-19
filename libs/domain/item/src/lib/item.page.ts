import { Item } from '@ab/data';
import { Card } from '@ab/ui';
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
  toCard(item: Item): Card {
    const card = {
      title: item.name,
      description: item.description || '',
      footer: '',
    };
    return card;
  }
}
