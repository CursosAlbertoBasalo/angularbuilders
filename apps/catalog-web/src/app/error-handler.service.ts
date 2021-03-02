import { Track, TrackerService } from '@ab/data';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { noop } from 'rxjs';
@Injectable()
export class ErrorHandlerService extends ErrorHandler {
  constructor(private service: TrackerService) {
    super();
  }

  handleError(error: any): void {
    if (error instanceof HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        const track: Track = {
          category: 'NetWorkError',
          action: `${error.name}; ${error.message}`,
          param: error.url,
        };
        this.service.track(track);
      } else {
        const track: Track = {
          category: 'ApiError',
          action: `${error.name}; ${error.message}`,
          param: `${error.status}:${error.url}`,
        };
        this.service.track(track);
        noop();
      }
    } else {
      const track: Track = {
        category: 'UnhandledError',
        action: `${error.name}; ${error.message}`,
        param: error.stack ? error.stack : null,
      };
      this.service.track(track);
    }

    // super.handleError(error);
  }
}
