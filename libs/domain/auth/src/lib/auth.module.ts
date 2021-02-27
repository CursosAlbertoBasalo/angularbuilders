import { DataModule } from '@ab/data';
import { UiModule } from '@ab/ui';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ActivatePage } from './activate.page';
import { LoginPage } from './login.page';
import { LoginFormComponent } from './ui/login-form/login-form.component';
import { ActivateFormComponent } from './ui/activate-form/activate-form.component';

@NgModule({
  imports: [
    CommonModule,
    DataModule,
    UiModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'login', pathMatch: 'full', component: LoginPage },
      { path: 'activate', pathMatch: 'full', component: ActivatePage },
    ]),
  ],
  declarations: [LoginPage, LoginFormComponent, ActivatePage, ActivateFormComponent],
})
export class AuthModule {}
