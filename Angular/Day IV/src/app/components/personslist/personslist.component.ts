import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-personlist',
    template: `
        <h1>List Component</h1>
        <ul class="list-group" *ngIf="personsList">
            <li  class="list-group-item" *ngFor="let person of personsList">
                <a href="https://www.google.com"
                    (click)="selectEventListener(person,$event)">{{person}}</a>
            </li>
        </ul>
        <br/>
        <h3 class="text-warning">Selected : {{selected}}</h3>
    `
})
export class PersonListComponent{
    personsList: string[];
    selected:string;
    constructor() { 
        this.personsList = ['Aayush','Samriddhi','Ashwini','Gausiya','Harshit','Shashank','Gautam'];
        this.selected = '';
    }
    selectEventListener(person:string,evt?:Event){
        this.selected = person;
        evt?.preventDefault();
    }
}