import { AbstractControl } from '@angular/forms';

export abstract class ItemValidators {
  static future(control: AbstractControl): any | null {
    const value = control.value as string;
    if (!value) return null;
    const dateValue = Date.parse(value);
    const now = new Date();
    if (now.getTime() >= dateValue) {
      return {
        future: 'Past dates are not allowed',
      };
    }
    return null;
  }
  static url(control: AbstractControl): any | null {
    const value = control.value as string;
    if (!value) return null;
    const reg = '(https?://)?([da-z.-]+).([a-z.]{2,6})[/w .-]*/?';
    if (value.match(reg)) {
      return null;
    }
    return {
      url: 'Not a valid url',
    };
  }
}
