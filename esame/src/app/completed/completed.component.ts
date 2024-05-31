import { Component } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { IToDo } from '../Models/i-to-do';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss'
})
export class CompletedComponent {
  completedTodos: any[] = [];

  constructor(private toDosrv: ToDoService) { }

  ngOnInit() {
    this.GetCompletedToDos();
  }

  GetCompletedToDos() {
    this.toDosrv.getCompletedToDos().subscribe(todos => {
      this.completedTodos = todos;
    });
  }

  onTodoStatusChange(todo: IToDo): void {
    this.toDosrv.updateTodoStatus(todo.id, todo.completed);
  }
}

