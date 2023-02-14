import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginService {

    usrName: string;

    // Subject
    private loginSource = new Subject<string>();

    // Broadcaster
    loginBroadcaster = this.loginSource.asObservable();

    constructor() {
        this.usrName = '';
    }

    addUserName(usrNm:string){
        this.usrName = usrNm;
        
        // Notification
        this.loginSource.next(this.usrName);
    }

    getUserName(){
        return this.usrName;
    }
}