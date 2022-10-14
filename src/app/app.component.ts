import { Component } from '@angular/core';
// import { LocalService } from '/local.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskElements = [];
  newTaskName = '';

  // constructor(private localStore: LocalService) {

  // }

  onTaskAdded() {
    this.taskElements.push({
      type: 'task',
      name: this.newTaskName,

    });
  }
}
