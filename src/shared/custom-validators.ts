import {AbstractControl, ValidationErrors} from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
  const emailRegex = /^[a-zA-Z1-9.+_%-]+@[a-zA-Z0-9.-]{1,12}\.?[a-zA-Z]{0,10}\.[a-zA-Z]{2,5}$/;
  const v = control.value;
  const result = emailRegex.test(v);

  if (!result) return {emailValidator: {v}};

  return null;
}
