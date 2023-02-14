import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIsAuthorized]'
})
export class IsAuthorizedDirective implements OnInit {

  constructor(private templateRef:TemplateRef<any>,
              private viewContainerRef:ViewContainerRef) { }

  ngOnInit(): void {
      const flag = true;
      if(flag){
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }else{
        this.viewContainerRef.clear();
      }
  }

}
