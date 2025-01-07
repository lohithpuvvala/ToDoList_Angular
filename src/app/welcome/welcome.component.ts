import { Component } from '@angular/core';
import { ActivatedRoute,RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-welcome',
  imports: [
    RouterLink,
    NgIf,
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})

export class WelcomeComponent {
  
  message : string = 'Some Welcome Message'
  name = ''
  constructor(private route:ActivatedRoute){

  }

  ngOnInit(): void {
    console.log(this.message)
    this.name = this.route.snapshot.params['name']
  }
}

