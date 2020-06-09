import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/services/task.service';
import { ActivatedRoute, Params } from '@angular/router';

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

      this.taskService.getTasks(params.listId).subscribe((tasks)=>{
          this.tasks = tasks;
          console.log(tasks)
      })
    })

    this.taskService.getLists().subscribe((lists : any)=>{
        console.log(lists)

        this.lists = lists
    })
  } 




}
