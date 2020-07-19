import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'newcourse-form',
  templateUrl: './newcourse-form.component.html',
  styleUrls: ['./newcourse-form.component.css']
})
export class NewcourseFormComponent {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl()
    }),
    topics: new FormArray([])
  });

  // Working with formBuilder. Approach better than eariler one.
  constructor (fb: FormBuilder){
    fb.group({
      name: ['', Validators.required], //Elements in this will be passed to FormControl object
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array
    });
  }

  addTopic(topic: HTMLInputElement){
    // Typecasting in action
    (this.topics as FormArray).push(new FormControl(topic.value));
    topic.value = ' ';
  }

  get topics(){
    return this.form.get('topics');
  }

  removeTopic(topic: FormControl){
    let index = this.topics['controls'].indexOf(topic);
    (this.topics as FormArray).removeAt(index);
  }
}