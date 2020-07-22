import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, retry } from 'rxjs/operators';   // To catch Exceptions

import { AppError } from "../common/app-error";
import { NotFoundError } from "../common/not-found-error";
import { BadInputError } from "../common/bad-input";
import {Observable} from 'rxjs';
//import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// This is a reusable data service
export class DataService {

   constructor(private http: HttpClient, private url: string) {

   }

   getAll(){
    return this.http.get(this.url).pipe(
        map(response => response),
        catchError(this.handleError)
    );
   }

   create(resource){
    return this.http.post(this.url, JSON.stringify(resource)).pipe(
      //catchError((error: Response) => {})
      catchError(this.handleError)
    ); 

    //return throwError(new AppError()); Use throwError to throw errors
   }

   update(resource){
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({isRead: true})).pipe(
      catchError(this.handleError)
    );
   }

   delete(resource){
    return this.http.delete(this.url + '/' + resource.id).pipe(
      //catchError((error: Response) => {
      map(response => response),
      catchError(this.handleError),   // For reusing the repetitive Observable throw error code.
      retry(3)
    ).toPromise();
   }

   // Extracting a Reusable error handling method
   private handleError(error: Response){
    if( error.status === 404 ){
      return Observable.throw(new NotFoundError());
    } else if( error.status === 400 ){
      return Observable.throw(new BadInputError(error.json()));
    }
    return Observable.throw(new AppError(error.json()));
   }
}
