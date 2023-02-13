import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'shared-sharedcomp',
    template: `
    <h3 class='text-warning'>I am the Shared Component of the Shared Module!</h3>`
})

export class SharedCompComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}