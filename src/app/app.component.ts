import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskElements = [];
  newTaskName = '';


  onTaskAdded() {
    this.taskElements.push({
      type: 'task',
      name: this.newTaskName,

    });
  }
}
