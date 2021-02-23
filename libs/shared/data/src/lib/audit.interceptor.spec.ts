import { TestBed } from '@angular/core/testing';

import { AuditInterceptor } from './audit.interceptor';

describe('AuditInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuditInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuditInterceptor = TestBed.inject(AuditInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
