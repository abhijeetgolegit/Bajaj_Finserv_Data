import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-demodirective',
    template: `
    <!-- appAddContent -->
    <!-- <p>Hello</p>
    <br/>
    <p appAddcontent></p>
    <div appAddcontent></div> -->

    <hr/>
    <!-- <h3>Hello Angular!</h3>
    <h3 appHighlight>Hello Angular</h3> -->
    <hr/>
    <h3>Hello Angular!</h3>
    <h3 appHighlight>Hello Angular!</h3>
    <h3 [appHighlight]="'palegreen'">Hello Angular</h3>
    <h3 [appHighlight]="'orange'">Hello Angular</h3>

    <!-- <ng-template appIsAuthorized>
            <div>
                <h1>This area is to be displayed, if the user is Authorized!</h1>
            </div>
    </ng-template> -->

            <!-- <div *appIsAuthorized>
                <h1>This area is to be displayed, if the user is Authorized!</h1>
            </div> -->

    `
})

export class DemoDirectiveComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}