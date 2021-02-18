import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TitleComponent, CardComponent],
  exports: [TitleComponent, CardComponent],
})
export class UiModule {}
