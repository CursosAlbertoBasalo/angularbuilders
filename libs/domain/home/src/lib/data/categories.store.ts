import { Store } from '@ab/data';
import { Injectable } from '@angular/core';
import { CategoryHome } from '../models/categoryHome';

@Injectable({
  providedIn: 'root',
})
export class CategoriesStore extends Store<CategoryHome[]> {
  constructor() {
    super([], true);
  }

  setCategories(categories: CategoryHome[]) {
    this.setState(categories);
  }

  setCategory(category: CategoryHome) {
    const currentState = this.getState();
    const affectedIndex = currentState.findIndex((c) => c.id === category.id);
    if (affectedIndex >= 0) {
      currentState[affectedIndex] = category;
    } else {
      currentState.push(category);
    }
    this.setState(currentState);
  }
}
