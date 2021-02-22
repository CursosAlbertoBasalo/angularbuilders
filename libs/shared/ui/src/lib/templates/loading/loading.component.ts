import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'ab-ui-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() props!: Observable<any>;
  @Output() data = new EventEmitter<never>();

  loading = true;
  errorMessage = '';

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loading = true;
    this.errorMessage = '';
    this.props = this.props.pipe(
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
