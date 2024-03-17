import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../../models/item.models';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css',
})
export class AddItemComponent {
  @Output() public itemAdded: EventEmitter<Item> = new EventEmitter<Item>();

  public addingItem(input: HTMLInputElement): void {
    this.itemAdded.emit({
      name: input.value,
      isBuyed: false,
    });
    input.value = '';
  }
}
