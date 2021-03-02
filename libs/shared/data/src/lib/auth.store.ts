import { Injectable } from '@angular/core';
import { Auth } from './models/auth';
import { Store } from './store';

@Injectable({
  providedIn: 'root',
})
export class AuthStore extends Store<Auth> {
  constructor() {
    super(
      { isLoggedIn: false, sessionToken: '', user: 'Unknown' },
      true,
      'auth'
    );
  }
  isLoggedIn() {
    return this.getState().isLoggedIn;
  }
  isLoggedIn$() {
    return this.select$((state) => state.isLoggedIn);
  }

  setSessionToken(email: string, sessionToken: string) {
    this.setState({
      isLoggedIn: true,
      sessionToken: sessionToken,
      user: email,
    });
  }
  getSessionToken() {
    return this.getState().sessionToken || '';
  }
  clearSessionToken() {
    this.setState({
      isLoggedIn: false,
      sessionToken: '',
      user: '',
    });
  }
}
