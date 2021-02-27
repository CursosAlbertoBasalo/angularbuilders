import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthStore } from './auth.store';

@Injectable({
  providedIn: 'root',
})
export class CanLoadGuard implements CanLoad {
  constructor(private router: Router, private store: AuthStore) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.store.isLoggedIn()) {
      return true;
    } else {
      return this.router.parseUrl('/auth/login');
    }
  }
}
