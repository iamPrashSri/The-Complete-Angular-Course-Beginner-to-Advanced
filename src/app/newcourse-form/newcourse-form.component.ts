import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'newcourse-form',
  templateUrl: './newcourse-form.component.html',
  styleUrls: ['./newcourse-form.component.css']
})
export class NewcourseFormComponent {
  form = new FormGroup({
    topics: new FormArray([])
  });

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