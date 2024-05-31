import { Component } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { IToDo } from '../Models/i-to-do';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  usersWithToDos: any[] = [];

  constructor(private toDoService: ToDoService) { }

  ngOnInit() {
    this.GetUsersWithToDos();
  }

  GetUsersWithToDos() {
    this.toDoService.getUsersWithToDos().subscribe(users => {
      this.usersWithToDos = users;
    });
  }

  onTodoStatusChange(todo: IToDo): void {
    this.toDoService.updateTodoStatus(todo.id, todo.completed);
  }
}

