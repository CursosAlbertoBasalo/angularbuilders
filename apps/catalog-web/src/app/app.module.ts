import { DataModule } from '@ab/data';
import { TermModule } from '@ab/term';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    TermModule,
    AppRoutingModule,
    DataModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
