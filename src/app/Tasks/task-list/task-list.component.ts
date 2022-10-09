import { Component, OnInit } from '@angular/core';
import { InputService } from 'src/app/input.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']

})
export class TaskListComponent implements OnInit {
  taskStatus: string = "strikethrough"
  constructor(public inputService:InputService) { }

  ngOnInit(): void {

  }

  strikethrough() {
    this.taskStatus = "strikethrough"


  }
}


