import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormGroup, FormControl} from '@angular/forms';
import { InputService } from '../input.service';

=======
import { FormGroup, FormControl } from '@angular/forms';
import { InputService } from 'src/app/input.service';
>>>>>>> 3bb6bd2100151ecd72a0f84773f9caeb2b783da4

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent  {


  constructor(public inputService: InputService) {}


<<<<<<< HEAD
export class TodoFormComponent {

  constructor(public inputService: InputService) { }
=======

>>>>>>> 3bb6bd2100151ecd72a0f84773f9caeb2b783da4
}
