import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor, UpperCasePipe, DatePipe } from '@angular/common';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

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
export class ListTodosComponent implements OnInit{
  todos: Todo[] = []
  message: string = ''

  constructor(
    private todoService:TodoDataService,
    private router:Router,
  ){

  }
  ngOnInit(): void {
      this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('lohithpuvvala').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }
  
  deleteTodo(id: number) {
    console.log(`delete Todo ${id}`);
    this.todoService.deleteTodo('lohithpuvvala',id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete Todo of id:${id} Successful!`
        this.refreshTodos();
      }
    );
  }

  updateTodo(id: number)
  {
    console.log(`update ${id}`);
    this.router.navigate(['todos',id]);
  }

  addTodo()
  {
    this.router.navigate(['todos',-1])
  }
  // todos = [
  //   new Todo(1, 'Learn Angular JS', false, new Date()),
  //   new Todo(2, 'Learn Advanced Python', false, new Date()),
  //   new Todo(3, "Complete Can't Hurt Me book by David Goggins", false, new Date()),
  // ]
}
export class Todo {
  constructor(
    public id: number,
    public description:string,
    public done: boolean,
    public targetDate:Date
  ){
    
  }
}

