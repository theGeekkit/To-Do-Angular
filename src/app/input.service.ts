import { Injectable, OnInit, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Task } from './Tasks/task';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InputService implements OnInit {
  todoForm: FormGroup;

  emptyList = false;

  tasks: Task[] = [];
  strikethrough: boolean = false;
  constructor(private http: HttpClient) {
    this.todoForm = new FormGroup({
      task: new FormControl(null),
      priority: new FormControl(null),
      deadline: new FormControl(null),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    const task = this.todoForm.value.task;
    const priority = this.todoForm.value.priority;
    const deadline = this.todoForm.value.deadline;
    const postData = { task: task, priority: priority, deadline: deadline };

    this.http
      .post(
        'https://todolist-3a48b-default-rtdb.firebaseio.com/task.json',
        postData
      )
      .subscribe(() => {
this.fetchTaskData()
      });
  }

  fetchTaskData() {
    this.http
      .get<{ [key: string]: Task }>(
        'https://todolist-3a48b-default-rtdb.firebaseio.com/task.json'
      )
      .pipe(
        map((responseData) => {
          const tasksArray = [];
          for (const key in responseData) {
            tasksArray.push({ ...responseData[key], id: key });
          }
          return tasksArray;
        })
      )
      .subscribe((tasksArray) => {
        this.tasks = tasksArray;
        console.log(this.tasks);
        this.todoForm.reset();
      });
  }

  onDeleteTask(id) {
    this.http
      .delete(
        'https://todolist-3a48b-default-rtdb.firebaseio.com/task/' + id + '.json'
      )
      .subscribe(() => {
        this.fetchTaskData();
      });

    // this.tasks =  this.tasks.filter(task => task !== index)
    // console.log(this.tasks)
  }
}

//adding login id to store task list to folder on agenda for 11-21-22

