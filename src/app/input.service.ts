import { Injectable, OnInit, Component } from '@angular/core';
import { FormControl, FormGroup  } from '@angular/forms';
import { Task } from './Tasks/task';
import { HttpClient } from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class InputService implements OnInit{



  emptyList = false

  tasks: Task[] = [];
  strikethrough:boolean=false;
  constructor(private http:HttpClient) {
    this.todoForm = new FormGroup({
      task: new FormControl(null),
      priority: new FormControl(null),
      deadline: new FormControl(null)
    });
  }


  todoForm: FormGroup;

  ngOnInit(): void {

  }

  onSubmit() {
    // this.tasks.push(this.todoForm.value);
    // console.log(this.tasks)
    // this.todoForm.reset()
    // this.emptyList = true
    const task = this.todoForm.value.task;
    const priority = this.todoForm.value.priority
    const deadline = this.todoForm.value.deadline
    const postData ={task:task, priority:priority, deadline:deadline}



    this.http.post("https://todolist-3a48b-default-rtdb.firebaseio.com/task.json", postData ).subscribe()
  }
}



