import { Component } from '@angular/core';
import { NgIf, NgFor, UpperCasePipe, DatePipe } from '@angular/common';

export class Todo {
  constructor(
    public id: number,
    public description:string,
    public done: boolean,
    public targetDate:Date
  ){
    
  }
}

@Component({
  selector: 'app-list-todos',
  imports: [
    NgIf,
    NgFor,
    UpperCasePipe,
    DatePipe,
  ],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent {
  todos = [
    new Todo(1, 'Learn Angular JS', false, new Date()),
    new Todo(2, 'Learn Advanced Python', false, new Date()),
    new Todo(3, "Complete Can't Hurt Me book by David Goggins", false, new Date()),
  ]
}
