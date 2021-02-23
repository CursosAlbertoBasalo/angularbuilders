import { TestBed } from '@angular/core/testing';

import { AdapterInterceptor } from './adapter.interceptor';

describe('AdapterInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AdapterInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AdapterInterceptor = TestBed.inject(AdapterInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
