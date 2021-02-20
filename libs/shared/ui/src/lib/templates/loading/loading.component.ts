import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'ab-ui-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent implements OnChanges {
  @Input() props!: Observable<unknown>;
  @Output() data = new EventEmitter<unknown>();
  data$!: Observable<unknown>;
  loading = true;
  errorMessage = '';

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.loading = true;
    this.errorMessage = '';
    this.data$ = this.props.pipe(
      tap({
        next: (data) => {
          this.loading = false;
          this.data.next(data);
        },
        error: (error) => {
          this.loading = false;
          this.errorMessage = error.message;
          // ! async pipe does not complete, and does not call the cdr
          this.cdr.markForCheck();
        },
      })
    );
  }
}
