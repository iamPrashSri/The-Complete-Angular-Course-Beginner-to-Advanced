import { Component, OnInit } from '@angular/core';
import { PostService } from 'app/services/post.service';
import { AppError } from 'app/common/app-error';
import { NotFoundError } from 'app/common/not-found-error';
import { BadInputError } from 'app/common/bad-input';

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
    //this.service.getPosts().subscribe(response => {
    this.service.getAll().subscribe(response => {
      //console.log(response);
      this.posts = response;
    }/* , error => {
      alert('An uxpected error occured');
      console.log(error);
    } */); 
  }

  createPost(titleInput: HTMLInputElement){
    /* let postObj = { title: titleInput.value }
    this.service.createPost(postObj).subscribe(response => {
      postObj['id'] = response['id'];
      this.posts.splice(0, 0, postObj);
      titleInput.value = ' ';
      console.log(response);
    }, (error: Response) => {
      if( error.status === 400){
        // this.form.setErrors(error);
      } else {
        alert('An uxpected error occured');
        console.log(error);
      }
    }); */

    let postObj = { title: titleInput.value }
    this.posts.splice(0, 0, postObj); // Optimistic Approach. Show update before actual update.
    titleInput.value = ' ';
    
    //this.service.createPost(postObj).subscribe(response => {
    this.service.create(postObj).subscribe(response => {
      postObj['id'] = response['id'];
      //this.posts.splice(0, 0, postObj);
      //titleInput.value = ' ';
      console.log(response);
    }, (error: AppError) => {
      this.posts.splice(0, 1);
      if( error instanceof BadInputError ){
        //this.form.setErrors(error.originalError);
      } else {
        /* alert('An uxpected error occured');
        console.log(error); */
        throw error; // So that it gets handled by the global error handler AppErrorHandler
      }
    });
  }

  updatePost(post){
    //this.service.updatePost(post).subscribe(response => {
    this.service.update(post).subscribe(response => {
      console.log(response);
    }/* , error => {
      alert('An uxpected error occured');
      console.log(error);
    } */);
    /* this.http.put(this.url, JSON.stringify(post)); */
  }

  deletePost(post){
    /* this.service.deletePost(post).subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    }, (error: Response) => {
      if(error.status === 404){
        alert('This post has already been deleted');
      } else{
        alert('An uxpected error occured');
        console.log(error);
      }
    }); */

    //this.service.deletePost(post).subscribe(response => {
    /* let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    this.service.delete(post).subscribe(response => {
      //let index = this.posts.indexOf(post);
      //this.posts.splice(index, 1);
    }, (error: AppError) => {
      this.posts.splice(index, 0, post);
      if( error instanceof NotFoundError ){
        alert('This post has already been deleted');
      } else {
        //alert('An uxpected error occured');
        //console.log(error);
        throw error;
      }
    }); */

    this.service.delete(post);
  }

}
