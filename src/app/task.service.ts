import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './model/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  //Esta URL obtiene el listado de todas las task

  private baseURL ="http://localhost:8080/api/tasks"; 

  constructor(private httpClient : HttpClient) {  }

  getListTask():Observable<Task[]>{
    return this.httpClient.get<Task[]>(`${this.baseURL}`); 
  }

  registerTask(task : Task) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,task); 
  }

  updateTask(id:number, task:Task):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,task); 
  }

  deleteTask(id:number):Observable<Task>{
    return this.httpClient.delete<Task>(`${this.baseURL}/${id}`); 
  }

  deleteAll():Observable<void>{
    return this.httpClient.delete<void>(`${this.baseURL}/deleteAll`); 
  }
   
}