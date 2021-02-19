import { Item } from '@ab/data';
import { Card } from '@ab/ui';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

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
      link: `item/${item.id}`,
    };
    return card;
  }
}
