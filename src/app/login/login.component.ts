import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  errMssg = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    if (this.username.trim().length === 0) {
      this.errMssg = 'Username field is missing';
    } else if (this.password.trim().length === 0) {
      this.errMssg = 'Password field is missing';
    } else {
      this.errMssg = '';
      let res = this.auth.login(this.username, this.password);
      if(res === 200){
        this.router.navigate(['home']);
      }
      if(res === 403){
        this.errMssg = "Invalid Authentication";
      }
    }
  }
}
