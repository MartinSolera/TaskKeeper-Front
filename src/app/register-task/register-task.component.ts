import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../model/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-register-task',
  templateUrl: './register-task.component.html',
  styleUrls: ['./register-task.component.css']
})
export class RegisterTaskComponent implements OnInit{

  task : Task = new Task(); 

  constructor(private taskService : TaskService, private router : Router){
}

ngOnInit(): void { 
}

saveTask(){
  this.taskService.registerTask(this.task).subscribe(dato => {
    console.log(dato);
    this.goToListTask(); 
  },error => console.log(error));
}

goToListTask(){
  this.router.navigate(['/task']); 
}


onSubmit(){
  this.saveTask();
  console.log(this.task);
}


}
