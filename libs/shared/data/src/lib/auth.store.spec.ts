import { TestBed } from '@angular/core/testing';
import { AuditStore } from './audit.store';

describe('AuditStore', () => {
  let service: AuditStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
