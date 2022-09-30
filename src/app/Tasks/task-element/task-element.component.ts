import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-element',
  templateUrl: './task-element.component.html',
  styleUrls: ['./task-element.component.css']
})
export class TaskElementComponent implements OnInit {
  @Output () taskCreated = new EventEmitter<{taskName: string, taskContent: string}>();
  newTaskName = '' ;
  newTaskContent = '' ;

  constructor() { }

  ngOnInit(): void {
  }

}
