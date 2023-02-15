import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-demo-pipes',
    template: `
    <h1>Demo Pipes!</h1>
    <!-- <h2 class='text-info'>{{name}}</h2>
    <h2 class='text-info'>{{name | uppercase}}</h2>
    <h2 class='text-info'>{{name | titlecase}}</h2>
    <hr/>

    <h2 class='text-info'>{{num}}</h2>
    <h2 class='text-info'>{{num | number}}</h2>
    <h2 class='text-info'>{{num | number:'1.1-2'}}</h2>
    <h2 class='text-info'>{{num | number:'1.4-6'}}</h2>

    <hr/>
    
    <h2 class='text-info'>{{num | percent}}</h2>
    <h2 class='text-info'>{{num | percent:'3.1-2'}}</h2> -->

    <!-- <hr/>
    <h2 class='text-info'>{{person}}</h2>
    <h2 class='text-info'>{{person | json}}</h2>

    <hr/>
    <h2 class='text-info'>{{today}}</h2>
    <h2 class='text-info'>{{today | date}}</h2>
    <h2 class='text-info'>{{today | date:'shortTime'}}</h2>
    <h2 class='text-info'>{{today | date:'fullDate'}}</h2>
    <h2 class='text-info'>{{today | date:'fullDate' | uppercase}}</h2>
    <h2 class='text-info'>{{today | date:'long'}}</h2>
    <h2 class='text-info'>{{today | date:'dd-MM-yyyy hh:mm:ss'}}</h2>
    <h2 class='text-info'>{{today | date:'dd-MMM-yyyy hh:mm:ss'}}</h2> -->

    <!-- <hr/>
    <h2 class='text-warning'>flag {{flag}}</h2>
    <h2 class='text-info'>{{today |date:format}}</h2>
    <button class='btn btn-info' 
    (click)="toggleButton()">{{flag}}</button>

    <br/><br/><br/>
    <button class='btn btn-info' 
    (click)="toggleButton()">{{flag ? 'Show Short Date!':'Show Full Date!'}}</button>
    <br/><br/><br/> -->

    <h2>Custom Pipe - caption</h2>
    <button class='btn btn-info' 
    (click)="toggleButton()">{{flag | caption}}</button>

    <br/><br/><br/>
    <h2>Custom Pipe - myfilter</h2>

    <div>
        <div>
            <label>Search Name, which starts with </label>
            <input type="text" class='form-control' 
            [(ngModel)]="by" />
        </div>
        <ul class='list-group'>
            <li class='list-group-item' *ngFor="let person of people | myfilter:by">
                    {{person}}
            </li>
        </ul>
        <h1>Hello World!</h1>
        <app-hello>Child Content</app-hello>
    </div>
    `
})

export class DemoPipesComponent {
    name: string;
    num: number;
    person: { id: number, name: string, address: { city: string, pin: number } };
    today: Date;
    flag: boolean;
    by: string;
    people: Array<string>;
    constructor() {
        this.name = 'sachin tendulkar';
        this.num = Math.PI;
        this.person = { id: 1, name: 'Abhijeet', address: { city: 'Pune', pin: 411038 } }
        this.today = new Date();
        this.flag = true;
        this.by = '';
        this.people = ['Ayush', 'Rudra', 'Harshit', 'Goutam', 'Ashwini', 'Gausiya', 'Abhijeet'];
    }

    get format() { return this.flag && 'fullDate' || 'shortDate' };
    toggleButton() {
        this.flag = !this.flag;
    }
}