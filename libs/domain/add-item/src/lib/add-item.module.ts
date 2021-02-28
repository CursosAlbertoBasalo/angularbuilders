import { DataModule } from '@ab/data';
import { UiModule } from '@ab/ui';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddItemPage } from './add-item.page';
import { AddItemFormComponent } from './ui/add-item-form/add-item-form.component';

@NgModule({
  imports: [
    CommonModule,
    DataModule,
    UiModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: AddItemPage },
    ]),
  ],
  declarations: [AddItemPage, AddItemFormComponent],
})
export class AddItemModule {}
