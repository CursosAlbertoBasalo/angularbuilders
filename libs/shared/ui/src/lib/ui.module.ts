import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { CardComponent } from './components/card/card.component';
import { LoadingComponent } from './templates/loading/loading.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TitleComponent, CardComponent, LoadingComponent],
  exports: [TitleComponent, CardComponent, LoadingComponent],
})
export class UiModule {}
