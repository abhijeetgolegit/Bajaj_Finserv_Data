import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCompComponent } from './components/sharedcomp.componet';

@NgModule({
  declarations: [
    SharedCompComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SharedCompComponent
  ]
})
export class SharedModule { }
