import { DataModule } from '@ab/data';
import { UiModule } from '@ab/ui';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchPage } from './search.page';
import { ItemsComponent } from './ui/items/items.component';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    DataModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: SearchPage },
    ]),
  ],
  declarations: [SearchPage, ItemsComponent],
  exports: [],
})
export class SearchModule {}
