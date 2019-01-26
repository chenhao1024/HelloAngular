import {Directive, Input} from '@angular/core';
import {Validator, AbstractControl, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[ChineseMobileValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ChineseMobileValidator,
      multi: true
    }
  ]
})

export class ChineseMobileValidator implements Validator {
  constructor() {

  }

  validate(control: AbstractControl): { [error: string]: any} {
    const val = control.value;
    const flag = /^1(3|4|5|7|8)\d{9}$/.test(val);
    if (flag) {
      control.setErrors(null);
      return null;
    } else {
      control.setErrors({ChineseMobileValidator: false});
      return {ChineseMobileValidator: false};
    }
  }
}
