import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BasicAuthenticationService {
  constructor(private http: HttpClient) {}

  authenticate(username: string, password: string) {
    console.log('before ' + this.isUserLoggedIn());
    if (username === 'lohithpuvvala' && password === 'dummy') {
      sessionStorage.setItem('authenticaterUser', username);
      console.log('after ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  executeAuthenticationService(username: string, password: string) {
    let basicAuthHeaderString =
      'Basic ' + window.btoa(username + ':' + password);

    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString,
    });
    return this.http
      .get<AuthenticationBean>(`http://localhost:8080/basicauth`, {
        headers: header,
      })
      .pipe(
        map((data) => {
          sessionStorage.setItem('authenticaterUser', username);
          return data;
        })
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticaterUser');
  }
}

export class AuthenticationBean {
  constructor(public message: string) {}
}
