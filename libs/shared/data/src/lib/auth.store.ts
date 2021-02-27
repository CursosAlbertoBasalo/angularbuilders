import { Injectable } from '@angular/core';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Auth } from './models/auth';
import { Store } from './store';

@Injectable({
  providedIn: 'root',
})
export class AuthStore extends Store<Auth> {
  constructor() {
    super({ isLoggedIn: false, sessionToken: '', user: 'Unknown' });
  }
  isLoggedIn() {
    return this.getState().isLoggedIn;
  }
  isLoggedIn$() {
    return this.getState$().pipe(
      map((state) => state.isLoggedIn),
      distinctUntilChanged()
    );
  }
  setSessionToken(email: string, sessionToken: string) {
    this.setState({
      isLoggedIn: true,
      sessionToken: sessionToken,
      user: email,
    });
  }
}
