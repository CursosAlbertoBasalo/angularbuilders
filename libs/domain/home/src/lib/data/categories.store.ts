import { Store } from '@ab/data';
import { Injectable } from '@angular/core';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { CategoriesHome } from '../models/categoriesHome';
import { CategoryHome } from '../models/categoryHome';
import { viewModes } from '../models/viewModes';

@Injectable({
  providedIn: 'root',
})
export class CategoriesStore extends Store<CategoriesHome> {
  constructor() {
    super(
      {
        categories: [],
        loaded: false,
        fullFilled: false,
        viewMode: viewModes.sortAddedDate,
      },
      true
    );
  }

  setCategories(categories: CategoryHome[]) {
    const state = this.getState();
    state.categories = categories;
    state.loaded = true;
    state.fullFilled = false;
    this.setState(state);
  }

  setCategory(category: CategoryHome) {
    const currentState = this.getState();
    const affectedIndex = currentState.categories.findIndex(
      (c) => c.id === category.id
    );
    if (affectedIndex >= 0) {
      currentState.categories[affectedIndex] = category;
    } else {
      currentState.categories.push(category);
    }
    currentState.fullFilled = currentState.categories.every(
      (category) => !!category.itemsCount
    );
    this.setState(currentState);
  }

  idLoaded$() {
    return this.getState$().pipe(
      map((state) => state.loaded),
      distinctUntilChanged()
    );
  }

  isFullFilled$() {
    return this.getState$().pipe(
      map((state) => state.fullFilled),
      distinctUntilChanged()
    );
  }

  categoriesCounter$() {
    return this.select$((state) => state.categories.length);
  }
}
