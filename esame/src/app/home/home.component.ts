import { Component } from '@angular/core';
import { IUsers } from '../Models/i-users';
import { IToDo } from '../Models/i-to-do';
import { UserService } from '../user.service';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

users: IUsers[] = [];
toDos: IToDo[] = [];
todosWithUsers: any[] = [];

constructor(private usersSrv: UserService, private toDoSrv: ToDoService) {}

ngOnInit() {
  this.loadUsersAndToDos();
}

loadUsersAndToDos() {
  this.usersSrv.users().subscribe(users => {
    this.users = users;
    this.toDoSrv.toDos().subscribe(todos => {
      this.toDos = todos;
      this.mergeData();
    });
  });
}

mergeData() {
  this.todosWithUsers = this.toDos.map(todo => {
    const user = this.users.find(user => user.id === todo.userId);
    return {
      ...todo,
      author: user ? `${user.firstName} ${user.lastName}` : 'Molto sad, nessun autore trovato'
}
  });

}

}
