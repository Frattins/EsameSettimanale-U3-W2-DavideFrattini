import { Component } from '@angular/core';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  usersWithToDos: any[] = [];

  constructor(private toDoService: ToDoService) { }

  ngOnInit() {
    this.loadUsersWithToDos();
  }

  loadUsersWithToDos() {
    this.toDoService.getUsersWithToDos().subscribe(users => {
      this.usersWithToDos = users;
    });
  }
}

