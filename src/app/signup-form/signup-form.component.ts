import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms'
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    //userName: new FormControl('', Validators.required),
    account: new FormGroup({
      userName: new FormControl('', [Validators.required,
                                  Validators.minLength(3),
                                  UsernameValidators.cannotContainSpace], UsernameValidators.shouldBeUnique),
      password: new FormControl('', Validators.required)})
  });

  // Getter function to have the value of form username in Component
  get userName(){
    return this.form.get('account.userName');
  }

  // Adding validator at runtime.
  login(){
    this.form.setErrors({
      'invalidLogin' : true
    });
  }
}
