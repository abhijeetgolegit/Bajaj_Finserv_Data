import { Component, EventEmitter, Input,Output } from '@angular/core';

@Component({
    selector: 'app-profile',
    template: `
    <h1>In Child's Component!</h1>
    <h3>Profile Name:- {{profileName}}!</h3>

    <input type="text" [(ngModel)]="profileName" />
    <button (click)="updateName()">Update</button>
    `
})

export class ProfileComponent {

    @Input()
    profileName:string;

    // Custom Event of ProfileComponent
    @Output()
    update:EventEmitter<string>;
    
    constructor() {
        this.profileName = 'Akshat';
        this.update = new EventEmitter<string>();
     }

     updateName(){
        console.log(this.profileName);
        // Raise the update evernt of profile comonent with event data
        // profile name
        this.update.emit(this.profileName);
     }

}