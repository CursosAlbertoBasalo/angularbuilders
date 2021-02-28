import { Item } from '@ab/data';
import { Component } from '@angular/core';
import { AddItemService } from './data/add-item.service';
@Component({
  templateUrl: './add-item.page.html',
  styles: [],
})
export class AddItemPage {
  categories$ = this.service.getCatergories$();
  constructor(private service: AddItemService) {}

  onSave(item: Item) {
    this.service.postItem$(item).subscribe();
  }
}
