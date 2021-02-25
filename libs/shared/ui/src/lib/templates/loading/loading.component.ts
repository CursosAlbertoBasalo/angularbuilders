import { Audit, AuditStore } from '@ab/data';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'ab-ui-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent {
  @Output() data = new EventEmitter<never>();
  audit$: Observable<Audit>;

  constructor(private store: AuditStore) {
    this.audit$ = this.store.getState$();
  }
}
