import { ValidationErrors, AbstractControl } from "@angular/forms";

export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(" ") >= 0) {
      return {
        cannotContainSpace: true
      };

      return null;
      /* return {
        'minLength': {
          requiredLength : 3,
          actualLength : control.value.length
        }
      } */
    }
  }
}
