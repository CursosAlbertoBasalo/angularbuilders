import { Card } from '@ab/ui';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'ab-home-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedComponent {
  @Input() props!: Item[];
  toCard(item: Item): Card {
    const card = {
      title: item.name,
      description: item.description || '',
      footer: '',
    };
    return card;
  }
}
