import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
    handleError(error){
        alert('An uxpected error occured');
        console.log(error);        
    }
}