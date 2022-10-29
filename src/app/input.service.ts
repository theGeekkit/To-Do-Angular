import { Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Task } from './Tasks/task';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD

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

=======
export class InputService implements OnInit{

  emptyList = false

  tasks: Task[] = [];
  strikethrough:boolean=false;
  constructor() { }


  todoForm: FormGroup;

  ngOnInit(): void {
    this.todoForm = new FormGroup({
      task: new FormControl(null),
      priority: new FormControl(null),
      deadline: new FormControl(null)
    });
  }

  onSubmit() {
    this.tasks.push(this.todoForm.value);
    console.log(this.tasks)
    this.todoForm.reset()
    this.emptyList = true

  }
>>>>>>> 3bb6bd2100151ecd72a0f84773f9caeb2b783da4
}



<<<<<<< HEAD
}
=======
>>>>>>> 3bb6bd2100151ecd72a0f84773f9caeb2b783da4
