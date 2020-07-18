import { ValidationErrors, AbstractControl } from "@angular/forms";

export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(" ") >= 0) {
      return {
        cannotContainSpace: true
      };
      /* return {
        'minLength': {
          requiredLength : 3,
          actualLength : control.value.length
        }
      } */
    }
    return null;
  }

  static shouldBeUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      // Asynchronous Operation. Returning a Promise Object
      setTimeout(() => {
        if (control.value === "mosh") {
          resolve({
            shouldBeUnique: true
          });
        } else {
          resolve(null);
        }
      }, 2000);
    });

    //return null;
  }
}
