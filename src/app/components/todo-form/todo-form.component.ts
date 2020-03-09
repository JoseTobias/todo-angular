import { Component, OnInit } from '@angular/core';
import { TodoSrevice } from 'src/app/services/todo-srevice.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  description: string = '';
  constructor(private TodoSrevice: TodoSrevice, private location: Location) { }

  ngOnInit(): void {
  }

  clear() {
    this.description = ''
  }

  add() {
    this.TodoSrevice.add(this.description)
    .then(() =>{ 
      this.clear()
      location.reload()
    })
  }

}
