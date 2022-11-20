import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoFormComponent} from 'src/app/todo-form/todo-form.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: "todoForm, component:TodoFormComponent}
  {path: ''}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }







