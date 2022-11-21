import { Component, OnInit } from '@angular/core';
import { InputService } from 'src/app/input.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']

})
export class TaskListComponent implements OnInit {

  constructor(public inputService:InputService) { }

  ngOnInit() {
    this.inputService.fetchTaskData()
  }

  strikethrough(index:any) {
   index.strikethrough = !index.strikethrough


  }
  onDeleteTask(index) {
    this.inputService.tasks =  this.inputService.tasks.filter(task => task !== index)
    console.log(this.inputService.tasks)

  }
}


