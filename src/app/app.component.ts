import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  viewMode = 'map';

  /* courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
  ]; */

  courses = [];

  canSave = true;

  task = {
    title: 'Review Applications',
    assignee: {
      name: 'John Smith'
    }
  }
  
  clickMe(){
    
  }

  onAdd(){
    this.courses.push({id: 4, name: 'course4'});
  }

  onRemove(courseId){
    this.courses.splice(courseId, 1);
  }

  loadCourses(){
    this.courses = [
      {id: 1, name: 'course1'},
      {id: 2, name: 'course2'},
      {id: 3, name: 'course3'},
    ];
  }

  trackCourse(index, course){
    return course ? course.id : undefined;
  }
}
