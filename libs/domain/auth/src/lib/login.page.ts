import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './data/login.service';

@Component({
  templateUrl: './login.page.html',
  styles: [],
})
export class LoginPage {
  constructor(private router: Router, private service: LoginService) {}
  onSend(credentials: unknown) {
    this.service.postCredentials$(credentials).subscribe({
      next: (userAtk) =>
        this.router.navigate(['./auth/activate'], {
          queryParams: userAtk,
          queryParamsHandling: 'merge',
        }),
    });
  }
}
