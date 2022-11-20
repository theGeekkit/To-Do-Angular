import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'todoform', component: TodoFormComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component:TodoFormComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],

})
export class AppRoutingModule {}

