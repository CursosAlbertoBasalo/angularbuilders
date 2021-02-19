import { DataModule } from '@ab/data';
import { UiModule } from '@ab/ui';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItemResolver } from './data/item.resolver';
import { ItemPage } from './item.page';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    UiModule,
    DataModule,
    RouterModule.forChild([
      {
        path: ':id',
        pathMatch: 'full',
        component: ItemPage,
        resolve: {
          item: ItemResolver,
        },
      },
    ]),
  ],
  declarations: [ItemPage],
})
export class ItemModule {}
