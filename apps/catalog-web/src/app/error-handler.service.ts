import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';
import { noop } from 'rxjs';

export class ErrorHandlerService extends ErrorHandler {
  // ToDo: send to an analytics store
  // ToDo: create a directive to track events on the analytics store
  handleError(error: any): void {
    if (error instanceof HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A.1: A client-side or network error occurred. Handle it accordingly.
        const formattedError = `${error.name}; ${error.message}`;
        console.log(formattedError);
      } else {
        // A.2: The API returned an unsuccessful response (i.e., 400, 401, 403, etc.).
        noop();
      }
    } else {
      // B. HANDLE A GENERALIZED ERROR FROM THE APPLICATION/CLIENT;
      const formattedError = `${error.name}; ${error.message}`;
      console.log(`${formattedError}`, error.stack ? error.stack : null);
    }

    // super.handleError(error);
  }
}
