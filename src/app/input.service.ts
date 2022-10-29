import { Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Task } from './Tasks/task';


@Injectable({
  providedIn: 'root'
})

export class InputService implements OnInit{
  tasks = [];
  // strikethrough:boolean=false;

  todoForm: FormGroup


  constructor() { }

ngOnInit() {
    this.todoForm = new FormGroup({
    'task': new FormControl(null),
    'priority': new FormControl(null),
    'deadline': new FormControl(null)
})

}
todoSubmit(enterTasks){
this.tasks.push(enterTasks)
console.log(this.tasks)

}



}
