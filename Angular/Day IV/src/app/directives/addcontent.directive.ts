import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAddcontent]'
})
export class AddcontentDirective implements OnInit{

  constructor(private elementRef:ElementRef<HTMLElement>,private renderer:Renderer2) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.innerText = "Content and Border added by Custom Directive!";
    this.renderer.setStyle(this.elementRef.nativeElement,"border","5px solid maroon");
    this.renderer.setStyle(this.elementRef.nativeElement,"font-size","xx-large");
    this.renderer.setStyle(this.elementRef.nativeElement,"margin","30px");
    this.renderer.setStyle(this.elementRef.nativeElement,"padding","30px");
    this.renderer.setStyle(this.elementRef.nativeElement,"margin-left","35%");
    this.renderer.setStyle(this.elementRef.nativeElement,"width","max-content");
    this.renderer.setStyle(this.elementRef.nativeElement,"border-radius","45%");
    this.renderer.setStyle(this.elementRef.nativeElement,"background-color","peachpuff");
  }

}
