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

  todosWithAuthors: any[] = [];
  filteredTodos: any[] = [];
  searchQuery: string = '';

  constructor(private toDoService: ToDoService) { }

  ngOnInit() {
    this.loadToDosWithAuthors();
  }

  loadToDosWithAuthors() {
    this.toDoService.getToDosWithAuthors().subscribe(todos => {
      this.todosWithAuthors = todos;
      this.filteredTodos = todos;
    });
  }

  onTodoStatusChange(todo: IToDo): void {
    this.toDoService.updateTodoStatus(todo.id, todo.completed);
  }

  onSearch() {
    const query = this.searchQuery.toLowerCase();
    if (query) {
      this.toDoService.searchTodosByUserName(query).subscribe(filteredTodos => {
        this.filteredTodos = filteredTodos;
      });
    } else {
      this.filteredTodos = this.todosWithAuthors;
    }
  }
}
