import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHideForm]'
})
export class HideFormDirective {

  constructor(private elem:ElementRef) { }

}
