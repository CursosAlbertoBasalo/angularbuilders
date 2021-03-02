import { Category, Item } from '@ab/data';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ItemValidators } from '../../data/item-validators';
import { CourseSubFormComponent } from '../course-sub-form/course-sub-form.component';
import { EventSubFormComponent } from '../event-sub-form/event-sub-form.component';

@Component({
  selector: 'ab-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddItemFormComponent implements OnInit {
  @Input() props: { categories: Category[] } = { categories: [] };
  @Output() save = new EventEmitter<Item>();
  @ViewChild(EventSubFormComponent, { static: true })
  eventSubForm!: EventSubFormComponent;
  @ViewChild(CourseSubFormComponent, { static: true })
  courseSubForm!: CourseSubFormComponent;

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      categoryId: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.minLength(3)]),
      url: new FormControl('', ItemValidators.url),
      price: new FormControl(0),
      event: this.eventSubForm.buildGroup(),
      course: this.courseSubForm.buildGroup(),
    });
  }

  onSave() {
    const item = this.form.value as Item;
    this.save.next(item);
    this.form.reset();
  }
}
