import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [
    RouterLink,
    NgIf,
  ],
  standalone:true,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  constructor(public hardcodedAuthenticationService:HardcodedAuthenticationService) {
    
  }

  ngOnInit():void{}
}
