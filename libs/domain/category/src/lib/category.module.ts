import { UiModule } from '@ab/ui';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryPage } from './category.page';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild([
      { path: ':id', pathMatch: 'full', component: CategoryPage },
    ]),
  ],
  declarations: [CategoryPage],
})
export class CategoryModule {}
