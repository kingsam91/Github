import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHideForm]'
})
export class HideFormDirective {

  constructor(private elem:ElementRef) { }


  @HostListener("click") onClicks(){
    this.dispLay("block")
  }

  dispLay(action:string) {
    this.elem.nativeElement.style.display='block';
  }

}
