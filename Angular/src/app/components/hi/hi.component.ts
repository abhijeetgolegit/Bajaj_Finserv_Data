import { Component } from '@angular/core';

@Component({
    selector: 'app-hi',
    // View
    // Angular Expression
    // String Interpolation
    template: `<h1>{{msg}}</h1>
    `,
    styles:[`
    h1{
        color:indigo;
        text-align:center;
    }`]
})
export class HiComponent {
    msg:string; // Model
    constructor() { 
        this.msg = 'Just to say Hi!';
    }
    // logic to modify msg - controller code
}