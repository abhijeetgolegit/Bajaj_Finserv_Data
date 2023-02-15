import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Usersservice } from 'src/app/services/users.service';

@Component({
    selector: 'app-users',
    template: `
   
     <div class="container">
                <div class="text-center">
                    <h1 class="text-primary">HTTP Communication</h1>
                </div>
                <h3 class="text-warning" *ngIf="message">{{message}}</h3>
        
        <button (click)="insertUser()">Add User!</button>
        <table class="table table-striped" style="margin:20px;">
        <thead>
            <tr class="table-success">
                <th>Id</th>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let user of users">
                <td>
                    <h5>{{user.id}}</h5>
                </td>
                <td>
                    <p>{{user.name}}</p>
                </td>
                <td>
                    <p>{{user.username}}</p>
                </td>
                <td>
                    <p>{{user.email}}</p>
                </td>                      
            </tr>
        </tbody>
    </table>
        </div>`
})

export class UsersComponent implements OnInit, OnDestroy {
    message: string;
    users?: Array<any>;
    get_sub?: Subscription;
    id: number = 0;
    constructor(private usersService: Usersservice) {
        this.message = 'Loading Data, please wait...';
    }
    ngOnInit() {
        this.get_sub = this.usersService.getAllUsers().subscribe({
            next: (resData) => {
                this.users = [...resData];
                this.message = ''
            },
            error: (err: HttpErrorResponse) => {
                this.message = err.message;
            }
        })
    }
    ngOnDestroy(): void {
        this.get_sub?.unsubscribe();
    }

    insertUser(){
        // id is not passed as it is auto generated

        let usr = {
            name:'Goutam',
            username:'G',
            email:'goutam@gmail.com'
        }
        
        this.usersService.addUser(usr).subscribe({
            next: (resData) =>{
                console.log(resData);
                alert(JSON.stringify(resData));
            },
            error:(err:HttpErrorResponse) =>{
                this.message = err.message;
            }
        })
  
    }
}