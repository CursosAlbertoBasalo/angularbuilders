import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Item } from '../../models/Item';

@Component({
  selector: 'ab-home-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedComponent {
  @Input() props!: Item[];
}
