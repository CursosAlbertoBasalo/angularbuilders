import { AuthStore, CanLoadGuard, DataModule, HeadService } from '@ab/data';
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
      pageDescription: 'Esto es el catálogo',
    },
    loadChildren: () => import('@ab/home').then((module) => module.HomeModule),
  },
  {
    path: 'item',
    loadChildren: () => import('@ab/item').then((module) => module.ItemModule),
  },
  {
    path: 'category',
    loadChildren: () =>
      import('@ab/category').then((module) => module.CategoryModule),
  },
  {
    path: 'search',
    data: {
      pageTitle: '🔍 search',
    },
    loadChildren: () =>
      import('@ab/search').then((module) => module.SearchModule),
  },
  {
    path: 'add-item',
    canLoad: [CanLoadGuard],
    loadChildren: () =>
      import('@ab/addItem').then((module) => module.AddItemModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('@ab/auth').then((module) => module.AuthModule),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, DataModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private headService: HeadService,
    private authStore: AuthStore
  ) {
    this.router.events
      .pipe(
        filter((routerEvent) => routerEvent instanceof NavigationEnd),
        map(() => this.activatedRoute.firstChild?.snapshot.data),
        filter((routeData) => !!routeData)
      )
      .subscribe({
        next: (routeData) => {
          throw new Error('forzado');

          // this.headService.setTitle(routeData?.pageTitle || '');
          // this.headService.setDescription(routeData?.pageDescription || '');
        },
      });
    this.authStore.isLoggedIn$().subscribe({
      next: (isLoggedIn) => {
        if (isLoggedIn) {
          this.router.navigateByUrl('/');
        } else {
          this.router.navigateByUrl('/auth/login');
        }
      },
    });
  }
}
