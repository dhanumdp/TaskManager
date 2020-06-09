import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/services/task.service';
import { Task } from 'src/models/task';
import { ActivatedRoute,Params, Router } from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  constructor(private taskService : TaskService, private route : ActivatedRoute, private router :Router) { }

  listId : string
  ngOnInit(): void {

     this.route.params.subscribe((params : Params)=>{
         this.listId = params['listId']
     })
  }

  createTask(title : string)
  {
    this.taskService.createTask(title,this.listId).subscribe((res : Task)=>{
      
        this.router.navigate(['../'],{relativeTo : this.route});
        
    })
  }

}
