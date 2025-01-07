import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username:string, password:string){
    if(username==='lohithpuvvala' && password==='dummy'){
      sessionStorage.setItem('authenticaterUser',username);
      return true;
    }else{
      return false;
    }
  }
}
