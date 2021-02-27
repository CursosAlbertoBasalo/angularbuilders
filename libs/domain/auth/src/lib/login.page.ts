import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './data/login.service';
import { Registration } from './models/registration';

@Component({
  templateUrl: './login.page.html',
  styles: [],
})
export class LoginPage {
  constructor(private router: Router, private service: LoginService) {}
  onSend(registration: Registration) {
    this.service.postCredentials$(registration).subscribe({
      next: (user) =>
        this.router.navigate(['./auth/activate'], {
          queryParams: user,
          queryParamsHandling: 'merge',
        }),
    });
  }
}
