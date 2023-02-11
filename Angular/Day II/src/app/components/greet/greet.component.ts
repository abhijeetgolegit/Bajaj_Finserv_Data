import { Component } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent {
  greetMsg:string;
  isDisabled:boolean = false;
  constructor(){
    this.greetMsg = 'Welcome to Bajaj Finserv!';
  }
}
