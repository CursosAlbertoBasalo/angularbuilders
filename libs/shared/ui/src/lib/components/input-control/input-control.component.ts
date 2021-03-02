import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'ab-ui-input-control',
  templateUrl: './input-control.component.html',
  styleUrls: ['./input-control.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputControlComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputControlComponent implements ControlValueAccessor {
  @Input() formControlName = '';
  @Input() form!: FormGroup;
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type = 'text';
  value: unknown;
  onChange = (_: any) => {
    return;
  };
  onTouch = () => {
    return;
  };

  onInput(event: any) {
    this.value = event.target.value;
    this.onTouch();
    this.onChange(this.value);
  }

  writeValue(value: unknown): void {
    this.value = value || '';
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  showError() {
    const control = this.form.controls[this.formControlName];
    return control.touched && control.invalid;
  }
  error() {
    const control = this.form.controls[this.formControlName];
    return JSON.stringify(control.errors);
  }
}
