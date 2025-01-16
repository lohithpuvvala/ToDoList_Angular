import { Component } from '@angular/core';
import { ActivatedRoute,RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { WelcomeDataService } from '../service/data/welcome-data.service';

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
  
  message : string = 'Some Welcome Message';
  welcomeMessageFromService:string = '';
  name = '';
  constructor(
    private route:ActivatedRoute,
    private service:WelcomeDataService){ }

  ngOnInit(): void {
    // console.log(this.message)
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage()
  {
    // console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    // console.log("Get Welcome Message");
    // console.log("last line of getWelcomeMessage");
  }
  
  getWelcomeMessageWithParameter()
  {
    // console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    // console.log("Get Welcome Message");
    // console.log("last line of getWelcomeMessage");
  }

  handleSuccessfulResponse(response: any)
  { 
    // console.log(response);
    // console.log(response.message);
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error: any){
    this.welcomeMessageFromService = error.error.message;
  }
}

