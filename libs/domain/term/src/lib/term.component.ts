import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'ab-term',
  templateUrl: './term.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TermComponent implements OnInit {
  private readonly waitMs = 500;
  private readonly minLength = 2;
  termControl!: FormControl;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.termControl = this.fb.control('');
  }
  ngOnInit(): void {
    this.fillFormOnRouteChanges();
    this.waitForRealChange();
  }

  private fillFormOnRouteChanges() {
    this.route.queryParams
      .pipe(
        filter((queryParams) => queryParams.term !== this.termControl.value)
      )
      .subscribe({
        next: (queryParams) =>
          this.termControl.patchValue(queryParams.term || ''),
      });
  }
  private waitForRealChange() {
    const controlValues$ = this.termControl.valueChanges;
    controlValues$
      .pipe(
        debounceTime(this.waitMs),
        filter((term) => (term as string).length >= this.minLength)
      )
      .subscribe({
        next: (searchTerm) => this.navigate(searchTerm),
      });
  }

  private navigate(searchTerm: string) {
    this.router.navigate(['search'], {
      queryParams: { term: searchTerm },
      queryParamsHandling: 'merge',
    });
  }
}
