import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {

   }

   getPosts(){
    return this.http.get(this.url);
   }

   createPost(postObj){
    return this.http.post(this.url, JSON.stringify(postObj));
   }

   updatePost(post){
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}));
   }

   deletePost(post){
    return this.http.delete(this.url + '/' + post.id);
   }
}
