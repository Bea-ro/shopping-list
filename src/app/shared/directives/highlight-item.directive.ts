import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightItem]',
  standalone: true,
})
export class HighlightItemDirective {
  @HostBinding('style.backgroundColor') public background: string =
    'transparent';
  @HostListener('mouseover') public onMouseEnter() {
    console.log('ratón encima');
    this.background = 'green';
  }

  constructor() {}
}
