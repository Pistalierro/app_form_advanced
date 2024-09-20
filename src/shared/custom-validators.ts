import {AbstractControl, ValidationErrors} from '@angular/forms';
import {delay, map, Observable, of} from 'rxjs';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
  const emailRegex = /^[a-zA-Z1-9.+_%-]+@[a-zA-Z0-9.-]{1,12}\.?[a-zA-Z]{0,10}\.[a-zA-Z]{2,5}$/;
  const v = control.value;
  const result = emailRegex.test(v);

  if (!result) return {emailValidator: {v}};

  return null;
}

export function rangeValidator(minValue: number, maxValue: number): ValidationErrors {
  return (control: AbstractControl): ValidationErrors | null => {
    const v = control.value;

    if (isNaN(v)) return {rangeValidator: {v}};
    if (v < minValue) return {minRange: {v}};
    if (v > maxValue) return {maxRange: {v}};

    return null;
  };
}

export function observableUrlValidator(control: AbstractControl): Observable<ValidationErrors | null> {
  const v = control.value;
  const urlRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  const result = urlRegex.test(v);

  return of(result).pipe(map(res => {
    if (res) return null;
    return {urlNotAllowed: {v}};
  })).pipe(delay(2000));
}
