import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TodosModule } from './todos/todos.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatIconModule,
    ReactiveFormsModule,
    TodosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
