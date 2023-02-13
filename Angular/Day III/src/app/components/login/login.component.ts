import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    template: `
   <div>
    <!-- One way databinding using string interpolation -->
        <!-- <h3>Login Component</h3>
        Enter Username: <input type="text" value="{{name}}" /><br/><br/>
        Enter Password: <input type="password" value="{{password}}" /><br/><br/>
        <button (click)="login()">Login</button> -->

        <!--  using change event -->
        <!-- <h3>Login Component</h3>
        Enter Username: <input type="text"
        #inputNm
        (change)="updateName(inputNm.value)" 
        value="{{name}}" /><br/><br/>

        Enter Password: <input type="password" value="{{password}}" /><br/><br/>
        <button (click)="login()">Login</button> -->

        <!-- Two way data binding using [()] -->
        <h3>Login Component</h3>
        Enter Username: <input type="text" [(ngModel)] = "name"/><br/><br/>
        Enter Password: <input type="password" [(ngModel)] = "password" /><br/><br/>
        <button (click)="login()">Login</button>
   </div>
    `
})

export class LoginComponent {
    name:string;
    password:string;
    constructor() {
        this.name='Admin';
        this.password = 'admin';
     }
    login() { 
        console.log('User: '+this.name+' logged in !');
    }
    updateName(nm:string){
        this.name = nm;
    }
}