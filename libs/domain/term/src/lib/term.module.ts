import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TermComponent } from './term.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [TermComponent],
  exports: [TermComponent],
})
export class TermModule {}
