import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ItemValidators } from '../../data/item-validators';

@Component({
  selector: 'ab-add-item-event-sub-form',
  templateUrl: './event-sub-form.component.html',
  styleUrls: ['./event-sub-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventSubFormComponent {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {}

  buildGroup() {
    this.form = this.fb.group({
      date: new FormControl('', ItemValidators.future),
      location: new FormControl(''),
    });
    return this.form;
  }
}
