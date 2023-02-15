import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class MenuService {
  menuItems:string[];
    constructor() {
      // Here it should be RESTFulservice call
       this. menuItems = ['Login','Greet','Products',
       'CartDetails','Directives','Profile','Pipes',
       'LifecycleHooks','Users','TemplateDriven',
      'ReactiveForms','Validations'];
     }
}
