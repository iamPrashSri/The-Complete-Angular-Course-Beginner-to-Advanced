import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/catch';   // To catch Exceptions
//import { catchError } from 'rxjs/operators';   // To catch Exceptions

/* import { AppError } from "../common/app-error";
import { NotFoundError } from "../common/not-found-error";
import { BadInputError } from "../common/bad-input";
import { Observable } from 'rxjs'; */
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {

  //private url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(http: HttpClient) {
    super(http, 'http://jsonplaceholder.typicode.com/posts');
  }

  /* getPosts(){
    return this.http.get(this.url);
  }

  createPost(postObj){
    return this.http.post(this.url, JSON.stringify(postObj)).pipe(
      //catchError((error: Response) => {})
      catchError(this.handleError)
    );
  }

  updatePost(post){
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true})).pipe(
      catchError(this.handleError)
    );
  }

  deletePost(post){
    return this.http.delete(this.url + '/' + post.id).pipe(
      //catchError((error: Response) => {
      catchError(this.handleError)   // For reusing the repetitive Observable throw error code.
    );
  }

  // Extracting a Reusable error handling method
  private handleError(error: Response){
    if( error.status === 404 ){
      return Observable.throw(new NotFoundError());
    } else if( error.status === 400 ){
      return Observable.throw(new BadInputError(error.json()));
    }
    return Observable.throw(new AppError(error.json()));
  } */
}
