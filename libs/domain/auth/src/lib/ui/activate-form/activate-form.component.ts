import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Activation } from '../../models/activation';

@Component({
  selector: 'ab-auth-activate-form',
  templateUrl: './activate-form.component.html',
  styleUrls: ['./activate-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivateFormComponent implements OnInit {
  @Input() props: any;
  @Output() send = new EventEmitter<Activation>();
  form!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      uat: new FormControl(this.props.atk, [Validators.required]),
    });
  }
  onSend() {
    this.send.next(this.form.value);
  }
}
