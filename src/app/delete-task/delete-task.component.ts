import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css']
})
export class DeleteTaskComponent {

    constructor(private taskService : TaskService, private router : Router){
      
    }

    ngOnInit(): void { 
    }

    onSubmit(){
      console.log("asdasdasdasd");
      this.deleteAll();
    }

    goToListTask(){
      this.router.navigate(['/task']); 
    }

    deleteAll(){
      this.taskService.deleteAll().subscribe(dato => {
        console.log("Entro aca");
        this.goToListTask(); 
      })
    }


}

