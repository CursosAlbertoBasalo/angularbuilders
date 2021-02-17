import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { viewModes } from '../../models/viewModes';

@Component({
  selector: 'ab-home-view-mode',
  templateUrl: './view-mode.component.html',
  styleUrls: ['./view-mode.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewModeComponent {
  @Output() viewMode = new EventEmitter<viewModes>();
  viewModesEnum = viewModes;

  emitViewMode(selectedViewMode: viewModes) {
    this.viewMode.next(selectedViewMode);
  }
}
