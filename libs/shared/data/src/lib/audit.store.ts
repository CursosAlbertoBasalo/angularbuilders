import { Injectable } from '@angular/core';
import { Audit } from './models/audit';
import { Store } from './store';

@Injectable({
  providedIn: 'root',
})
export class AuditStore extends Store<Audit> {
  constructor() {
    super({ isLoading: false, errorMessage: '' });
  }
}
