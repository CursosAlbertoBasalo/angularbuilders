import { DataModule } from '@ab/data';
import { UiModule } from '@ab/ui';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeService } from './data/home.service';
import { HomePage } from './home.page';
import { CategoriesComponent } from './ui/categories/categories.component';
import { FeaturedComponent } from './ui/featured/featured.component';
import { ViewModeComponent } from './ui/view-mode/view-mode.component';

@NgModule({
  imports: [
    CommonModule,
    DataModule,
    UiModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: HomePage },
    ]),
  ],
  declarations: [
    HomePage,
    CategoriesComponent,
    FeaturedComponent,
    ViewModeComponent,
  ],
  providers: [HomeService],
})
export class HomeModule {}
