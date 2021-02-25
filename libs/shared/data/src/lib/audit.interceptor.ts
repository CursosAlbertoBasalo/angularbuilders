import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, filter, tap } from 'rxjs/operators';
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
    this.startLoading();
    return next.handle(request).pipe(
      filter(() => request.method === 'GET'),
      filter((event) => event instanceof HttpResponse),
      tap({
        next: () => this.completeLoad(),
      }),
      catchError((error) => {
        this.failedLoad(error.message);
        throw error;
      })
    );
  }

  private startLoading() {
    this.store.setState({ isLoading: true, errorMessage: '' });
  }

  private completeLoad() {
    this.store.setState({ isLoading: false, errorMessage: '' });
  }

  private failedLoad(errorMessage: string) {
    this.store.setState({ isLoading: false, errorMessage });
  }
}
