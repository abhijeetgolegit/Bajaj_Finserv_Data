import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class MenuService {
  menuItems:string[];
    constructor() {
      // Here it should be RESTFulservice call
       this. menuItems = ['Login','Products','Cart Details','Photos'];
     }
}
