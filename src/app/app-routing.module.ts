import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoFormComponent} from 'src/app/todo-form/todo-form.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {path: "todoForm", component:TodoFormComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }







