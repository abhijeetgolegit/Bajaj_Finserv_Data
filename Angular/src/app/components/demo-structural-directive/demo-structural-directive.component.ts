import { Component } from '@angular/core';
import { User } from 'src/app/User';


@Component({
  selector: 'app-demo-structural-directive',
  templateUrl: './demo-structural-directive.component.html',
  styleUrls: ['./demo-structural-directive.component.css']
})
export class DemoStructuralDirectiveComponent {
  fruits:string[];
  users:User[];
  constructor(){
    this.fruits = ['Apple','Mango','Grapes'];
    this.users =  [
      {id:100,name:'Sachin',city:"Mumbai"},
      {id:100,name:'Rahul',city:"Bengaluru"},
      {id:100,name:'Sourav',city:"Kolkata"},
      {id:100,name:'Yuvi',city:"Chandigarh"},
      {id:100,name:'Mahi',city:"Ranchi"}
    ]
  }
}
