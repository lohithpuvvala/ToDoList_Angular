import { Component } from '@angular/core';
import { NgIf, NgFor, UpperCasePipe, DatePipe } from '@angular/common';

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
    {id: 1, description:'Learn Angular JS'},
    {id: 2, description:'Learn Advanced Python'},
    {id: 3, description:"Complete Can't Hurt Me book by David Goggins"},
  ]
  todo = {
    id : 1,
    description: 'Learn Angular JS',
  }
}
