import { UiModule } from '@ab/ui';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ActivatePage } from './activate.page';
import { LoginPage } from './login.page';
import { ActivateFormComponent } from './ui/activate-form/activate-form.component';
import { LoginFormComponent } from './ui/login-form/login-form.component';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'login', pathMatch: 'full', component: LoginPage },
      { path: 'activate', pathMatch: 'full', component: ActivatePage },
    ]),
  ],
  declarations: [
    LoginPage,
    LoginFormComponent,
    ActivatePage,
    ActivateFormComponent,
  ],
})
export class AuthModule {}
