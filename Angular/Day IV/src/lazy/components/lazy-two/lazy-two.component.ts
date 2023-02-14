import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'lazy-two',
    template: `
    <h2 class='text-warning'>Lazy Two Component from Lazy module loaded!.....</h2>
    `
})

export class LazyTwoComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}