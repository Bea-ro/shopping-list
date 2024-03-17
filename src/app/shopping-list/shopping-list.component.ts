import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ItemComponent } from '../shared/components/item/item.component';
import { Item } from '../models/item.models';
import { AddItemComponent } from '../shared/components/add-item/add-item.component';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [ItemComponent, CommonModule, AddItemComponent],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent {
  public Items: Item[] = [];

  public itemAdded(item: Item) {
    this.Items.push(item);
  }
}
