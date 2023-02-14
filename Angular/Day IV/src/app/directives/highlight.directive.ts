// import { Directive, ElementRef } from '@angular/core';

// @Directive({
//   selector: '[appHighlight]'
// })
// export class HighlightDirective {
//   highlightColor:string
//   constructor(private elementRef:ElementRef<HTMLElement>) { 
//     this.highlightColor = 'yellow';
//     this.elementRef.nativeElement.style.backgroundColor = this.highlightColor;
//   }
// }


// import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

// @Directive({
//   selector: '[appHighlight]'
// })
// export class HighlightDirective {
//   highlightColor:string
//   constructor(private elementRef:ElementRef<HTMLElement>,private renderer:Renderer2) { 
//     this.highlightColor = 'yellow';
//   }
//   @HostListener('mouseenter')
//   onMouseEnter(){
//     this.renderer.setStyle(this.elementRef.nativeElement,"background-color",this.highlightColor);
//     this.renderer.setStyle(this.elementRef.nativeElement,"width",'max-content');
//     this.renderer.setStyle(this.elementRef.nativeElement,"padding",'30px');
//     this.renderer.setStyle(this.elementRef.nativeElement,"margin-left",'45%');
//     this.renderer.setStyle(this.elementRef.nativeElement,"border-radius",'50%');
//   }

//   @HostListener('mouseleave')
//   onMouseLeave(){
//     this.renderer.removeStyle(this.elementRef.nativeElement,"background-color");
//   }
// }


import { Directive, ElementRef, HostListener, Renderer2,Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight')
  highlightColor:string;

  constructor(private elementRef:ElementRef<HTMLElement>,private renderer:Renderer2) { 
    this.highlightColor = 'yellow';
  }
  @HostListener('mouseenter')
  onMouseEnter(){
    this.renderer.setStyle(this.elementRef.nativeElement,"background-color",this.highlightColor);
    this.renderer.setStyle(this.elementRef.nativeElement,"width",'max-content');
    this.renderer.setStyle(this.elementRef.nativeElement,"padding",'30px');
    this.renderer.setStyle(this.elementRef.nativeElement,"margin-left",'45%');
    this.renderer.setStyle(this.elementRef.nativeElement,"border-radius",'50%');
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.renderer.removeStyle(this.elementRef.nativeElement,"background-color");
  }
}
