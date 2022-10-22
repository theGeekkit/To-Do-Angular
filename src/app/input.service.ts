import { Injectable } from '@angular/core';
import { Task } from './Tasks/task';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
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
}



