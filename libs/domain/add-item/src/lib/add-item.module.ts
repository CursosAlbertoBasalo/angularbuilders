import { DataModule } from '@ab/data';
import { UiModule } from '@ab/ui';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddItemPage } from './add-item.page';
import { AddItemFormComponent } from './ui/add-item-form/add-item-form.component';
import { EventSubFormComponent } from './ui/event-sub-form/event-sub-form.component';
import { CourseSubFormComponent } from './ui/course-sub-form/course-sub-form.component';

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
  declarations: [AddItemPage, AddItemFormComponent, EventSubFormComponent, CourseSubFormComponent],
})
export class AddItemModule {}
