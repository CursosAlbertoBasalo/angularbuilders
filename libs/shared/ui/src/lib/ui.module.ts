import { DataModule } from '@ab/data';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { InputControlComponent } from './components/input-control/input-control.component';
import { SelectControlComponent } from './components/select-contol/select-contol.component';
import { TitleComponent } from './components/title/title.component';
import { LoadingComponent } from './templates/loading/loading.component';
import { TrackDirective } from './directives/track.directive';

@NgModule({
  imports: [CommonModule, RouterModule, DataModule],
  declarations: [
    TitleComponent,
    CardComponent,
    LoadingComponent,
    InputControlComponent,
    SelectControlComponent,
    TrackDirective,
  ],
  exports: [
    TitleComponent,
    CardComponent,
    LoadingComponent,
    InputControlComponent,
    SelectControlComponent,
    TrackDirective,
  ],
})
export class UiModule {}
