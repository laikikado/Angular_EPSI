import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from './../todo/interfaces/todo/todo.interface';

@Component({
  selector: 'app-todos',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.css']
})
export class TodosComponent implements OnInit {
  public todos: Todo[];
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.getTodos();
    this.setForm();
  }

  public updateTodo(event: Todo): void {
    const updatedIndex = this.todos.findIndex(t => t._id === event._id);
    if (updatedIndex >= 0) {
      this.todos[updatedIndex] = event;
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }

  public deleteTodo(idToDelete: number): void {
    const indexToDelete = this.todos.findIndex(t => t._id === idToDelete);
    if (indexToDelete >= 0) {
      this.todos.splice(indexToDelete, 1);
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }

  public addTodo(): void {
    if (this.form.valid) {
      const todo = this.setTodo();
      this.todos.push(todo);
      this.saveTodos();
    }
  }

  private setForm(): void {
    this.form = this.formBuilder.group({
      label: [null, Validators.required]
    });
  }

  private setTodo(): Todo {
    const todo = {} as Todo;
    todo._id = this.todos.reduce((acc, t) => (acc <= t._id ? acc + 1 : acc), 1);
    todo.label = this.form.controls.label.value;
    todo.isDone = false;

    return todo;
  }

  private getTodos() {
    const todos = localStorage.getItem('todos');
    this.todos = todos ? JSON.parse(todos) : [];
  }

  private saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
