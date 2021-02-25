import { HeadService, Item } from '@ab/data';
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
  constructor(route: ActivatedRoute, head: HeadService) {
    this.item = route.snapshot.data.item;
    head.setTitle(this.item.name);
    head.setDescription(this.item.description || '');
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
