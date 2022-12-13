// @ts-nocheck
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uname = "";
  pword = "";

  constructor(private router: Router) { }

  login(uname, pword) {
    if( uname === 'tarun' && pword === '12345'){
      return 200
    } else {
      return 403
    }
  }

  logout(){
    this.router.navigate(['login'])
  }
}
