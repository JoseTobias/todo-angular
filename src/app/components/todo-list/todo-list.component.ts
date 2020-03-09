import { Component, OnInit } from '@angular/core';
import { TodoSrevice } from 'src/app/services/todo-srevice.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: any;
  constructor(private TodoSrevice: TodoSrevice) {
   }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.TodoSrevice.getTodos().subscribe(
      (data) => {
        this.todos = data;
      }, (error: any) => {
        console.log(error);
      })
  }
  marked(todo, choice) {
    this.TodoSrevice.mark(todo, choice).then(
      () => {
        this.ngOnInit();
      }, (error: any) => {
        console.log(error);
      })
  }
}
