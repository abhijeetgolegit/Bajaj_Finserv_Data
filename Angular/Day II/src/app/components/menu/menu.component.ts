import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu',
    template: `
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">
                    Bajaj Finserv!
                </a>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNav"  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <ul id="navbarNav" class="nav navbar-nav collapse navbar-collapse">
                <li class="nav-item" *ngFor="let item of menuItems">
                    <a class="nav-link" href="#">{{item}}</a>
                </li>
            </ul>
        </nav>
    </div>`
})

export class MenuComponent implements OnInit {
    menuItems:string[];
    constructor() {
       this. menuItems = ['Login','Products','Cart Details','Mobiles'];
     }

    ngOnInit() { }
}