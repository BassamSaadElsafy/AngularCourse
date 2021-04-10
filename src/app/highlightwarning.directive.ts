import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightwarning]'
})
export class HighlightwarningDirective {

  constructor(el: ElementRef) { 
   
    el.nativeElement.classList.add('alert', 'alert-warning'); 
    
  }

}
