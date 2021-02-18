import { TermModule } from '@ab/term';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@ab/home').then((module) => module.HomeModule),
  },
  {
    path: 'item',
    loadChildren: () => import('@ab/item').then((module) => module.ItemModule),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('@ab/search').then((module) => module.SearchModule),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    TermModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
