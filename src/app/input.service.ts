import { Injectable } from '@angular/core';
import { Task } from './Tasks/task';

@Injectable({
  providedIn: 'root'
})
export class InputService {
  tasks: Task[] = [];

  constructor() { }
}
