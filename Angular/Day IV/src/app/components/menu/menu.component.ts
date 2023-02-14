import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
    selector: 'app-menu',
    template: `
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">
                    <img src="./assets/images/BajajFinserv.png" class="headerlogo" />
                    Bajaj Finserv!
                </a>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNav"  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <ul id="navbarNav" class="nav navbar-nav collapse navbar-collapse">
                <li class="nav-item" *ngFor="let item of menuItems">
                    <!-- <a class="nav-link" href="{{item|lowercase}}">{{item}}</a>  -->
                   <a class="nav-link" routerLink="{{item|lowercase}}">{{item}}</a>
                </li>
            </ul>

             <!-- For lazy module -->
        <ul class="nav navbar-nav collapse navbar-collapse" id="navbarNav">
            <li class="nav-item">                
                <a class="nav-link" routerLink="/lazy">Lazy One</a>
            </li>
            <li class="nav-item">                
                <a class="nav-link" routerLink="/lazy/two">Lazy Two</a>
            </li>
        </ul>
        </nav>
    </div>`,
    providers:[MenuService]
})

export class MenuComponent implements OnInit {
    menuItems:string[];
    // constructor() {
    //    this. menuItems = ['Login','Products','Cart Details','Mobiles'];
    //  }

    constructor(private menuService:MenuService){
        this.menuItems = this.menuService.menuItems;
    }

    ngOnInit() { }
}