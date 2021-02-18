import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Title } from '../../models/title';

@Component({
  selector: 'ab-ui-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent {
  // ToDo: extract to a model interface
  @Input() props!: Title;
}
