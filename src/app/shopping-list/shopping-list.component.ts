import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ItemComponent } from '../shared/components/item/item.component';
import { Item } from '../models/item.models';
import { AddItemComponent } from '../shared/components/add-item/add-item.component';

const SHOPPING_LIST_KEY = 'SHOPPING_LIST';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [ItemComponent, CommonModule, AddItemComponent],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit {
  public Items: Item[] = [];

  ngOnInit() {
    let ItemsSaved = window.localStorage.getItem('SHOPPING_LIST');
    if (ItemsSaved) {
      this.Items = JSON.parse(ItemsSaved);
    }
  }

  public itemAdded(item: Item) {
    this.Items.push(item);
    this.saveLocalStorage();
  }
  public saveLocalStorage() {
    window.localStorage.setItem('SHOPPING_LIST', JSON.stringify(this.Items));
  }
}
