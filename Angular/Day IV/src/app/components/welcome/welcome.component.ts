import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
    selector: 'app-welcome',
    template: `<h1>Welcome <span class="text-danger">{{userName}}</span>!</h1>`
})

export class WelcomeComponent implements OnInit {
    userName:string='';
    constructor(private loginService:LoginService) { 
        this.loginService.loginBroadcaster.subscribe(res =>{
            this.userName = res;
        })

        this.userName = this.loginService.getUserName();
    }

    ngOnInit() { }
}