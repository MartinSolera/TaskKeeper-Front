import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from './model/task';
import { TaskService } from './task.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  taskArray : Task[]; 

  constructor(private taskService : TaskService, private router : Router){
      
  }

  title = 'Sistema gestion de Task asd adsad asd';

  goToListTask(){
    this.router.navigate(['/task']); 
  }

  deleteAll(){
    this.taskService.deleteAll().subscribe(dato => {
      console.log("Antes del delete");
      this.getDatos();
      this.goToListTask(); 
      console.log("Ya hizo el delete");
    })
  }

  getDatos(){
    this.taskService.getListTask().subscribe(dato => {
      this.taskArray = dato;
    });
  }

  
}
