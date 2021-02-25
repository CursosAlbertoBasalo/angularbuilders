import { Card } from '@ab/ui';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CategoryHome } from '../../models/categoryHome';

@Component({
  selector: 'ab-home-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent {
  @Input() props!: CategoryHome[];
  toCard(category: CategoryHome): Card {
    const card = {
      title: category.name,
      description: category.description || '',
      footer: `${
        category.itemsCount ? category.itemsCount + ' items' : 'No items yet'
      }`,
      link: `category/${category.id}`,
    };
    return card;
  }
}
