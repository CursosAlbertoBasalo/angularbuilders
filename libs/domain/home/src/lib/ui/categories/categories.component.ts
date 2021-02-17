import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Category } from '../../models/Category';

@Component({
  selector: 'ab-home-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent {
  @Input() props!: Category[];
}
