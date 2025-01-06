import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})

export class WelcomeComponent implements OnInit{
  
  message : string = 'Some Welcome Message'
  name = ''
  constructor(private route:ActivatedRoute){

  }

  ngOnInit(): void {
    console.log(this.message)
    this.name = this.route.snapshot.params['name']
  }
}

