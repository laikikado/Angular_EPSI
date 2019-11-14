import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
  } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Todo } from './../interfaces/todo/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  @Output() public newTodo = new EventEmitter<Todo>();
  @Output() public todoToDelete = new EventEmitter<number>();
  @Input() public todo: Todo;
  public form: FormGroup;

  public ngOnInit(): void {
    this.setForm();
  }

  public deleteTodo(): void {
    this.todoToDelete.emit(this.todo._id);
  }
  public changeState() {
    this.todo.isDone = !this.form.controls.state.value;
    this.newTodo.emit(this.todo);
  }

  private setForm() {
    this.form = this.formBuilder.group({
      state: [this.todo.isDone]
    });
  }
}
