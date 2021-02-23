import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { concatMap, delay, retryWhen } from 'rxjs/operators';

const RETRY_MAX = 3;
const DELAYED_RETRY_MS = 3000;

@Injectable()
export class RetryInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next
      .handle(request)
      .pipe(retryWhen((error$) => this.tryRetry(error$)));
  }

  tryRetry(error$: Observable<HttpErrorResponse>) {
    return error$.pipe(
      concatMap((error, count) => {
        if (this.canRetry(error, count)) {
          return of(error);
        } else {
          return throwError(error);
        }
      }),
      delay(DELAYED_RETRY_MS)
    );
  }

  private canRetry(error: HttpErrorResponse, count: number) {
    return (error.status == 0 || error.status >= 500) && count < RETRY_MAX;
  }
}
