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

todosWithUsers: any[] = [];

constructor(private toDoSrv: ToDoService) {}

ngOnInit() {
  this.GetToDosWithUsers();
}

GetToDosWithUsers() {
  this.toDoSrv.getToDosWithAuthors().subscribe(todos => {
    this.todosWithUsers = todos;
  });
}

}
