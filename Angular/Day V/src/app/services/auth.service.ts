import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // custom authentication logic e.g. JWT Token based
  public value: boolean = false;

  // based on role - Authorization
  public isAdmin:boolean = false;

  constructor() { }

  // Authentication
  isUserLoggedIn() {
    return this.value ? true : false;
  }

  // Autherization
  isUserAuthorized() {
    return this.isAdmin ? true : false;
  }

}
