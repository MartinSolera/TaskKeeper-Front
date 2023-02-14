import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTaskComponent } from './list-task/list-task.component';

import {HttpClientModule} from '@angular/common/http';
import { RegisterTaskComponent } from './register-task/register-task.component'; 
import { FormsModule } from '@angular/forms';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTaskComponent,
    RegisterTaskComponent,
    UpdateTaskComponent,
    DeleteTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
