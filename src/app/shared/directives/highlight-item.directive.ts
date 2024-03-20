import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightItem]',
  standalone: true,
})
export class HighlightItemDirective {
  @HostBinding('style.fontWeight') public highlightedItem: string = '300';
  @HostListener('mouseover') public onMouseEnter() {
    this.highlightedItem = '600';
  }

  constructor() {}
}
