import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AdapterInterceptor } from './adapter.interceptor';
import { AuditInterceptor } from './audit.interceptor';
import { AuthInterceptor } from './auth.interceptor';
import { RetryInterceptor } from './retry.interceptor';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  exports: [HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuditInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RetryInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AdapterInterceptor, multi: true },
  ],
})
export class DataModule {
  constructor(@Optional() @SkipSelf() theModule: DataModule) {
    console.warn('NEW DataModule');
    if (theModule) {
      throw new TypeError(`DataModule is imported twice.`);
    }
  }
}
