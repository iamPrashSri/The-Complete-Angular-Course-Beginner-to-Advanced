import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appImputFormat]'
})
export class ImputFormatDirective {

  //@Input('format') format;
  @Input('appImputFormat') format;

  constructor(private el: ElementRef) { }

  @HostListener('focus') onFocus(){
   console.log('onFocus'); 
  }

  @HostListener('blur') onBlur(){
   let value: string = this.el.nativeElement.value;
   if( this.format === 'lowercase') {
     this.el.nativeElement.value = value.toLowerCase();
   } else {
     this.el.nativeElement.value = value.toUpperCase();
   }
   
  }

}