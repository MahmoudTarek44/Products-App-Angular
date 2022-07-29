import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  loggedIn: boolean = false;

  checkAuth() {
    return !!localStorage.getItem('Email');
  }

  constructor() {}
}
