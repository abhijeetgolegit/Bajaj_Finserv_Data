import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pagenotfound',
    template: `
    <h1>Page Not Found!</h1>
    <img [src]="imgPath" />
    `,
    styles:[`
        h1{
            color:red;
            font-size:bold;
        }
        img{ 
            width:500px;
            height:400px;
            padding:50px;
        }
    `]
})
export class PageNotFoundComponent implements OnInit {
    imgPath:string;
    constructor() {
        this.imgPath = './assets/images/error-404.png'
     }

    ngOnInit() { }
}