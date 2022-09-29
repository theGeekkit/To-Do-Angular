import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskElements = [];
  newTaskName = '';
  newTaskContent = '';

  onTaskAdded(taskData: {taskName: string, taskContent: string}) {
    this.taskElements.push({
      type: 'task',
      name: this.newTaskName,
      content: this.newTaskContent
    });
}
