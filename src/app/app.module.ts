import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TaskInputComponent } from './Tasks/task-input/task-input.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TaskListComponent } from './Tasks/task-list/task-list.component';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

import { TodoFormComponent } from './todo-form/todo-form.component';
// import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskListComponent,
    TaskInputComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatCardModule,
    RouterModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
