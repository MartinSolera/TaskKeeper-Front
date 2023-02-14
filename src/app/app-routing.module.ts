import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { RegisterTaskComponent } from './register-task/register-task.component';


const routes: Routes = [
  {path : "task", component:ListTaskComponent},
  {path:'',redirectTo:'task',pathMatch:'full'},
  {path: 'register-task',component : RegisterTaskComponent}, 
  {path: 'delete-task',component : DeleteTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
