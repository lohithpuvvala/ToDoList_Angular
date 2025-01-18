import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username = 'lohithpuvvala';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(
    private router: Router,
    public hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService
  ) {}

  handleLogin() {
    if (
      this.hardcodedAuthenticationService.authenticate(
        this.username,
        this.password
      )
    ) {
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

  handleBasicAuthLogin() {
    this.basicAuthenticationService
      .executeAuthenticationService(this.username, this.password)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.router.navigate(['welcome', this.username]);
          this.invalidLogin = false;
        },
        (error: any) => {
          console.log(error);
          this.invalidLogin = true;
        }
      );
  }
}
