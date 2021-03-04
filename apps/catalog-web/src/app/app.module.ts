import { DataModule } from '@ab/data';
import { TermModule } from '@ab/term';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorHandlerService } from './error-handler.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    TermModule,
    AppRoutingModule,
    DataModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [{ provide: ErrorHandler, useClass: ErrorHandlerService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
