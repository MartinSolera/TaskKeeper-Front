import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/domain/model/task';
import { TaskService } from 'src/app/service/task.service';


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
  this.taskService.registerTask(this.task).subscribe(dat => {
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
