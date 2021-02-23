import { DataModule } from '@ab/data';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { TitleComponent } from './components/title/title.component';
import { LoadingComponent } from './templates/loading/loading.component';

@NgModule({
  imports: [CommonModule, RouterModule, DataModule],
  declarations: [TitleComponent, CardComponent, LoadingComponent],
  exports: [TitleComponent, CardComponent, LoadingComponent],
})
export class UiModule {}
