import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'ab-ui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() props!: Card;
}
