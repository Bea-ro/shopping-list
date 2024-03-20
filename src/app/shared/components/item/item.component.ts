import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HighlightItemDirective } from '../../directives/highlight-item.directive';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, HighlightItemDirective],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  @Input() public name: string = '';
  @Input() public isBuyed: boolean = false;
  @Output() public isBuyedChange: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  public isBuyedToggle() {
    this.isBuyedChange.emit(!this.isBuyed);
  }
}
