import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];
  private url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { 
    http.get(this.url).subscribe(response => {
      //console.log(response);
      this.posts = response;
    });  
  }

  createPost(titleInput: HTMLInputElement){
    let postObj = { title: titleInput.value }
    this.http.post(this.url, JSON.stringify(postObj)).subscribe(response => {
      postObj['id'] = response['id'];
      this.posts.splice(0, 0, postObj);
      titleInput.value = ' ';
      console.log(response);
    });
  }

  ngOnInit(): void {
  }

}
