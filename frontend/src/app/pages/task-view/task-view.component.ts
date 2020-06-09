import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/services/task.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Task } from 'src/models/task';
import { List } from 'src/models/list';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  constructor(private taskService : TaskService, private route : ActivatedRoute ) { }

  lists : any;
  tasks : any

  ngOnInit(): void {



    this.route.params.subscribe((params : Params)=>{
      console.log(params);

      this.taskService.getTasks(params.listId).subscribe((tasks : Task[])=>{
          this.tasks = tasks;
          console.log(tasks)
      })
    })

    this.taskService.getLists().subscribe((lists : List[])=>{
        console.log(lists)

        this.lists = lists
    })
  } 


  OnTaskClick(task : Task)
  {
    // we want to set the task to be completed

    this.taskService.completed(task).subscribe(()=>{
      console.log("Updated Successfully")

      //once completed successfully

      task.completed = !task.completed;

    })
  }


}
