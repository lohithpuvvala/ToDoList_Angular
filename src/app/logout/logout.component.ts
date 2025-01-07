import { Component } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  constructor(
    public hardcodedAuthenticationService: HardcodedAuthenticationService
  ){ }

  ngOnInit():void{
    this.hardcodedAuthenticationService.logout();
  }
}
