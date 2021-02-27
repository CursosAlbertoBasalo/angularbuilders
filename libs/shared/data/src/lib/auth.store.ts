import { Injectable } from '@angular/core';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Auth } from './models/auth';
import { Store } from './store';

@Injectable({
  providedIn: 'root',
})
export class AuthStore extends Store<Auth> {
  constructor() {
    super({ loggedIn: false, token: '', user: 'Unknown' });
  }
  isLoggedIn() {
    return this.getState().loggedIn;
  }
  isLoggedIn$() {
    return this.getState$().pipe(
      map((state) => state.loggedIn),
      distinctUntilChanged()
    );
  }
}
