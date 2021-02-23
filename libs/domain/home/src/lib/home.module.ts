import { DataModule } from '@ab/data';
import { UiModule } from '@ab/ui';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { CategoriesComponent } from './ui/categories/categories.component';
import { FeaturedComponent } from './ui/featured/featured.component';
import { ViewModeComponent } from './ui/view-mode/view-mode.component';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    DataModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: HomePage,
      },
    ]),
  ],
  declarations: [
    HomePage,
    CategoriesComponent,
    FeaturedComponent,
    ViewModeComponent,
  ],
  providers: [],
})
export class HomeModule {}
