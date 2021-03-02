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
  selector: 'ab-ui-select-control',
  templateUrl: './select-contol.component.html',
  styleUrls: ['./select-contol.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectControlComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectControlComponent implements ControlValueAccessor {
  @Input() formControlName = '';
  @Input() form!: FormGroup;
  @Input() label = '';
  @Input() placeholder = '';
  @Input() options: { id: string; name: string }[] = [];
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
