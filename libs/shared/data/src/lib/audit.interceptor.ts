import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { AuditStore } from './audit.store';

@Injectable()
export class AuditInterceptor implements HttpInterceptor {
  constructor(private store: AuditStore) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.method !== 'GET') {
      return next.handle(request);
    }

    this.store.startLoading();
    // this.store.dispatch('start-loading');

    return next.handle(request).pipe(
      filter((event) => event instanceof HttpResponse),
      tap({
        next: () => this.completeLoad(),
        error: (error) => this.failedLoad(error.message),
      })
      // catchError((error) => {
      //   this.failedLoad(error.message);
      //   throw error;
      // })
    );
  }

  // private startLoading() {
  //   this.store.setState({ isLoading: true, errorMessage: '' });
  // }

  private completeLoad() {
    this.store.setState({ isLoading: false, errorMessage: '' });
  }

  private failedLoad(errorMessage: string) {
    this.store.setState({ isLoading: false, errorMessage });
  }
}
