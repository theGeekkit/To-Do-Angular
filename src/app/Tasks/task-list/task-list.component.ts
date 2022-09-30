import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']

})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [ {
    task: string;
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
