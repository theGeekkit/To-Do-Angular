import { Injectable } from '@angular/core';
import { Task } from './Tasks/task';

@Injectable({
  providedIn: 'root'
})
export class InputService {
  tasks: Task[] = [];
  strikethrough:boolean=false;
  constructor() { }
}

// deleteTask(id:number){
//   this.tasks = this.tasks.filter((v , i) => i !==id);
