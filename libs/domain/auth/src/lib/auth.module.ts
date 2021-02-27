import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'login', pathMatch: 'full', component: LoginPage },
    ]),
  ],
  declarations: [LoginPage],
})
export class AuthModule {}
