import { Category } from '@ab/data';
import { Card } from '@ab/ui';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ab-home-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent {
  @Input() props!: Category[];
  toCard(category: Category): Card {
    const card = {
      title: category.name,
      description: category.description || '',
      footer: '',
    };
    return card;
  }
}
