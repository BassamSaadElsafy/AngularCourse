import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDisabled]'
})
export class DisabledDirective {

  constructor(el: ElementRef) {

    el.nativeElement.setAttribute("disabled");
    
   }

}
