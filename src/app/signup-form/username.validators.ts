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

    static shouldBeUnique(control: AbstractControl): ValidationErrors | null {
      
      // Asynchronous Operation. Need to di
      setTimeout(() => {
        if(control.value === 'mosh'){
          return {
            'shouldBeUnique' : true
          };
          return null;
        }
      }, 2000);

      return null;
    }
}
