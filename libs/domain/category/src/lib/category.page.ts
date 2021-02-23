import { Category, Item } from '@ab/data';
import { Card } from '@ab/ui';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { CategoryService } from './data/category.service';

type AllResults = [Category, Item[]];

@Component({
  templateUrl: './category.page.html',
  styles: [
    `
      :host section {
        display: flex;
        flex-wrap: wrap;
        justify-content: var(--justify-important);
      }
    `,
  ],
})
export class CategoryPage implements OnInit {
  category$: Observable<Category> = of({ id: '', name: '' });
  items$: Observable<Item[]> = of([]);
  allResults$: Observable<[Category, Item[]]> = of([{ id: '', name: '' }, []]);

  constructor(
    private route: ActivatedRoute,
    private service: CategoryService
  ) {}

  ngOnInit(): void {
    // this.getCategoryAndThenItsItems();
    // this.getCategoryAndItsItemsInParallelWaitingForTheLatest();
    this.getCategoryAndItsItemsInParallel();
  }

  private getCategoryAndThenItsItems() {
    this.category$ = this.route.params.pipe(
      map((params) => params.id),
      filter((id) => id !== null),
      switchMap((id) => this.service.getById$(id)),
      tap({
        next: (category) =>
          (this.items$ = this.service.getItemsById$(category.id)),
      })
    );
  }

  private getCategoryAndItsItemsInParallelWaitingForTheLatest() {
    this.allResults$ = this.route.params.pipe(
      map((params) => params.id),
      filter((id) => id !== null),
      switchMap((id) =>
        forkJoin([this.service.getById$(id), this.service.getItemsById$(id)])
      )
    );
  }

  private getCategoryAndItsItemsInParallel() {
    this.route.params
      .pipe(
        map((params) => params.id),
        filter((id) => id !== null),
        tap({
          next: (id) => {
            this.category$ = this.service.getById$(id);
            this.items$ = this.service.getItemsById$(id);
          },
        })
      )
      .subscribe();
  }

  categoryToCard(thing: Category | unknown): Card {
    const category = thing as Category;
    if (!category) return { title: '', description: '', footer: '' };
    const card = {
      title: category.name,
      description: category.description || '',
      footer: '',
    };
    return card;
  }
  itemToCard(thing: Item | unknown): Card {
    const item = thing as Item;
    if (!item) return { title: '', description: '', footer: '' };
    const card = {
      title: item.name,
      description: item.description || '',
      footer: '',
      link: `../../item/${item.id}`,
    };
    return card;
  }
}
