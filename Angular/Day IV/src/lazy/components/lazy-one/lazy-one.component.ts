import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'lazy-one',
    template: `
    <h2 class='text-success'>Lazy One Component from Lazy module loaded!.....</h2>
    `
})

export class LazyOneComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}