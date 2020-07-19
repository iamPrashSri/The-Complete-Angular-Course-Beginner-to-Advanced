import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewcourseFormComponent } from './newcourse-form/newcourse-form.component';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, ContactFormComponent, SignupFormComponent, NewcourseFormComponent, NewcomponentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
