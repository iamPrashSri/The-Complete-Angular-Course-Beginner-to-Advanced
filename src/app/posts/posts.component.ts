import { Component, OnInit } from '@angular/core';
import { PostService } from 'app/services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];
  
  constructor(private service: PostService) { 
    /* http.get(this.url).subscribe(response => {
      //console.log(response);
      this.posts = response;
    });  */ 
  }

  // Lifecycle hook called at component initialization
  ngOnInit(): void {
    this.service.getPosts().subscribe(response => {
      //console.log(response);
      this.posts = response;
    }); 
  }

  createPost(titleInput: HTMLInputElement){
    let postObj = { title: titleInput.value }
    this.service.createPost(postObj).subscribe(response => {
      postObj['id'] = response['id'];
      this.posts.splice(0, 0, postObj);
      titleInput.value = ' ';
      console.log(response);
    });
  }

  updatePost(post){
    this.service.updatePost(post).subscribe(response => {
      console.log(response);
    });
    /* this.http.put(this.url, JSON.stringify(post)); */
  }

  deletePost(post){
    this.service.deletePost(post).subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }

}
