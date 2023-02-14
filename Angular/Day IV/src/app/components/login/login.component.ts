import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
    selector: 'app-login',
    template: `
    <!-- <div>
            <h3>Login Component!</h3>
            Enter Username:- <input type='text' value="{{name}}" /><br/><br/>
            Enter Pas   sword:- <input type='password' value="{{password}}" /><br/><br/>
            <button (click)="login()">Login</button>
    </div> -->
        <!-- Making changes by handling change event  -->
        <!-- <div>
            <h3>Login Component!</h3>
            Enter Username:- <input type='text' [value]="name" #inputNM
                                    (change)="updateName(inputNM.value)"/><br/><br/>
            Enter Password:- <input type='password' value="{{password}}" /><br/><br/>
            <button (click)="login()">Login</button>
        </div> -->
        
    <!--  Two Way Data Binding along with [(ngModel)]-->
           <div>
            <h3>Login Component!</h3>
            Enter Username:- <input type='text' [(ngModel)]="name"/><br/><br/>
            Enter Password:- <input type='password' [(ngModel)]="password" /><br/><br/>
            <button (click)="login()">Login</button>
            <!-- <button (click)="setName()">Set Name</button> -->
        </div>
    `
})

export class LoginComponent {
    name: string;
    password: string;

    constructor(private loginService:LoginService,
        private router:Router,
        private authService:AuthService) {
        this.name = 'Admin';
        this.password = 'admin';
    }

    login() {
        console.log('User ' + this.name + ' logged in!');
        this.loginService.addUserName(this.name);

        // Authentication logic
        this.authService.value = true;

        // Authorization logic
        if(this.name.toLowerCase() === 'admin')
            this.authService.isAdmin = true;

        // Navigate to the Products Component
        this.router.navigate(['/products']);
    }

    // updateName(nm:string){
    //     this.name =nm;
    //  }

    //  setName(){
    //     this.name = Date.now().toString();
    //  }
}