import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { TodoComponent } from './components/todo.component';


@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    BrowserModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  exports: [TodoComponent],
  declarations: [TodoComponent],
  providers: []
})
export class TodoModule {}
