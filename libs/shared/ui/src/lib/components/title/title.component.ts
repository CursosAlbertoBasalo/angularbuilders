import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ab-ui-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent {
  // ToDo: icon, link, size...
  @Input() props!: string;
}
