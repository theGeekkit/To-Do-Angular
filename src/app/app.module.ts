import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TaskInputComponent } from './Tasks/task-input/task-input.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';


// import { MatToolbarModule } from '@angular/material/toolbar';
import { TaskListComponent } from './Tasks/task-list/task-list.component';
// import {MatCardModule} from '@angular/material/card';
// import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskListComponent,
    TaskInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // MatToolbarModule,
    FormsModule,

    // MatCardModule,
    // MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
