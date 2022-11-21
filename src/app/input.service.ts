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
    // this.fetchTasksData().subscribe(postData => {
    //   this.tasks = postData;
    // this.todoForm.reset()
    // });

    this.todoForm = new FormGroup({
      task: new FormControl(null),
      priority: new FormControl(null),
      deadline: new FormControl(null),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    // this.tasks.push(this.todoForm.value);
    // console.log(this.tasks)
    // this.todoForm.reset()
    // this.emptyList = true
    const task = this.todoForm.value.task;
    const priority = this.todoForm.value.priority;
    const deadline = this.todoForm.value.deadline;
    const postData = { task: task, priority: priority, deadline: deadline };

    this.http
      .post(
        'https://todolist-3a48b-default-rtdb.firebaseio.com/task.json',
        postData
      )
      .subscribe();
  }

  fetchTaskData() {
    this.http
      .get<{ [key: string]:Task }>(
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
        this.todoForm.reset()
      });
  }

  // fetchTasksData(): Observable<Task[]> {
  //   return this.http
  //     .get('https://todolist-3a48b-default-rtdb.firebaseio.com/task.json')
  //     .pipe(
  //       map((data) => {
  //         console.log(Object.keys(data));
  //         return Object.keys(data).map((id) => {
  //           const tasks = new Task(
  //             data[id].task,
  //             data[id].priority,
  //             data[id].strikethrough,
  //             data[id].deadline
  //           )
  //           tasks.id = id;
  //           return tasks;
  //         })
  //       })
  //     )

  // }
}
