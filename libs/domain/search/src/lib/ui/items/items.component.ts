import { Item } from '@ab/data';
import { Card, Title } from '@ab/ui';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ab-search-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsComponent {
  @Input() props!: Item[];

  toTitle(): Title {
    return {
      caption: `Found ${this.props?.length || 0} items.`,
    };
  }

  toCard(item: Item): Card {
    const card = {
      title: item.name,
      description: item.description || '',
      footer: '',
      link: `../item/${item.id}`,
    };
    return card;
  }
}
