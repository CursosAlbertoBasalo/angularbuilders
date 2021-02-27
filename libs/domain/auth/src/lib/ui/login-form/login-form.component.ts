import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Registration } from '../../models/registration';

@Component({
  selector: 'ab-auth-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  @Output() send = new EventEmitter<Registration>();
  form!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }
  onSend() {
    this.send.next(this.form.value);
  }
}
