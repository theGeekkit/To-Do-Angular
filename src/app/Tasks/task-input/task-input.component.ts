import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { InputService } from 'src/app/input.service';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css']
})
export class TaskInputComponent implements OnInit {

  taskInput = ""
  constructor(private inputService:InputService) { }

  ngOnInit(): void {
      }
addInput() {
 this.inputService.tasks.push({task: this.taskInput});
 this.taskInput = "";


}
}
