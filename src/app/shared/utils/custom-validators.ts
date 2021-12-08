import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static theSame(c: AbstractControl) {

    if (c.value.password && c.value.password === c.value.passwordConfirm) {
      return null;
    }
    return { x: true }
  }

  static shouldBePassed(control: AbstractControl): ValidationErrors | null {
    if (Date.parse(control.value) < Date.now()) {
      return null;
    }
    return { shouldBePassed: true }

  }

  static atLeaseOneShouldBeSelected(c: AbstractControl): ValidationErrors | null {
    if (Object.values(c.value).includes(true)) return null;
    return { atLeaseOneShouldBeSelected: true }
  }


}
