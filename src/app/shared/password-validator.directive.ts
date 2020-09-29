import { AbstractControl, ValidatorFn } from '@angular/forms';

export function samePasswordValidator(otherField): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const samePassword = otherField.value === control.value;
    return samePassword ? null: {notSamePassword: true};
  };
}