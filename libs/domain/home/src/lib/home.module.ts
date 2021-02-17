import { DataModule } from '@ab/data';
import { UiModule } from '@ab/ui';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { HomeService } from './home.service';

@NgModule({
  imports: [
    CommonModule,
    DataModule,
    UiModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: HomePage },
    ]),
  ],
  declarations: [HomePage],
  providers: [HomeService],
})
export class HomeModule {}
