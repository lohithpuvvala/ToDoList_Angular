import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean {
  constructor(
    public message: string
  ){ }
}

@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService()
  {
    return this.http.get<HelloWorldBean>("http://localhost:8080/hello-world-bean");
  }
  
  // http://localhost:8080/hello-world/path-variable/lohithpuvvala
  
  executeHelloWorldServiceWithPathVariable(name:string = '')
  {
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    let header = new HttpHeaders(
      {
        Authorization: basicAuthHeaderString
      }
    )
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`,{headers: header});
  }

  createBasicAuthenticationHttpHeader()
  {
    let username = 'lohithpuvvala'
    let password = 'dummy'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username +':'+ password);
    return basicAuthHeaderString;
  }
  
}
