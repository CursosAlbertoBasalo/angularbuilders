import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
  selector: 'ab-term',
  templateUrl: './term.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TermComponent implements OnInit {
  private readonly minLength = 2;
  private readonly waitMs = 500;
  termControl!: FormControl;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.termControl = this.fb.control('');
  }
  ngOnInit(): void {
    this.fillForm();
    this.waitForRealChange();
  }

  private fillForm() {
    this.route.queryParams.subscribe({
      next: (queryParams) => {
        this.termControl.patchValue(queryParams.term || '');
      },
    });
  }
  private waitForRealChange() {
    const controlValues$ = this.termControl.valueChanges;
    controlValues$
      .pipe(
        debounceTime(this.waitMs),
        filter((term) => (term as string).length > this.minLength),
        distinctUntilChanged()
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
