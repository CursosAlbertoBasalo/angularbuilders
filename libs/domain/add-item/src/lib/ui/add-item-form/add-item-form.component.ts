import { Category, Item } from '@ab/data';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'ab-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddItemFormComponent implements OnInit {
  @Input() props: { categories: Category[] } = { categories: [] };
  @Output() save = new EventEmitter<Item>();
  form!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      categoryId: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.minLength(3)]),
      url: new FormControl(''),
      price: new FormControl(0),
      event: new FormGroup({
        date: new FormControl(''),
        location: new FormControl(''),
      }),
      course: new FormGroup({
        date: new FormControl(''),
        teacher: new FormControl(''),
      }),
    });
  }

  onSave() {
    const item = this.form.value as Item;
    this.save.next(item);
    this.form.reset();
  }
}

class ItemValidators {
  static future(control: AbstractControl): any | null {
    console.log('future');
    const value = control.value as Date;
    if (!value) return null;
    const now = new Date();
    if (now.getTime() > value.getTime()) {
      return { future: 'No past dates allowed' };
    }
    return null;
  }
}
