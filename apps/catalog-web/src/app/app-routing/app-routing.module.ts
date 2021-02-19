import { HeadService } from '@ab/data';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
  Routes,
} from '@angular/router';
import { filter, map } from 'rxjs/operators';
const routes: Routes = [
  {
    path: '',
    data: {
      pageTitle: 'catalog',
    },
    loadChildren: () => import('@ab/home').then((module) => module.HomeModule),
  },
  {
    path: 'item',
    loadChildren: () => import('@ab/item').then((module) => module.ItemModule),
  },
  {
    path: 'search',
    data: {
      pageTitle: '🔍 search',
    },
    loadChildren: () =>
      import('@ab/search').then((module) => module.SearchModule),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private headService: HeadService
  ) {
    this.router.events
      .pipe(
        filter((routerEvent) => routerEvent instanceof NavigationEnd),
        map((routerEvent) => this.activatedRoute.firstChild?.snapshot.data),
        filter((routeData) => !!routeData)
      )
      .subscribe({
        next: (routeData) => {
          this.headService.setTitle(routeData?.pageTitle || '');
          this.headService.setDescription(routeData?.pageDescription || '');
        },
      });
  }
}
