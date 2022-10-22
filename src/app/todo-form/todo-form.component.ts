import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { InputService } from 'src/app/input.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  constructor(public inputService: InputService) {}

  todoForm: FormGroup;

  ngOnInit(): void {
    this.todoForm = new FormGroup({
      task: new FormControl(null),
      priority: new FormControl(null),
      deadline: new FormControl(null),
    });
  }

  onSubmit() {
    this.inputService.tasks.push(this.todoForm.value);
    this.todoForm.reset()
  }
}
