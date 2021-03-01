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

  public startLoading() {
    this.setState({ isLoading: true, errorMessage: '' });
  }

  public dispatch(type: string, payload?: any) {
    switch (type) {
      case 'start-loading':
        this.setState({ isLoading: true, errorMessage: '' });
        break;

      default:
        break;
    }
  }
}
