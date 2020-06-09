import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/services/task.service';
import { Router } from '@angular/router';

import { List } from 'src/models/list';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  constructor(private taskService : TaskService, private route :Router ) { }

  ngOnInit(): void {
  }

  createList(title : string)
  {
    this.taskService.createList(title).subscribe((res:List)=>{
        console.log(res);
        this.route.navigate([`/lists/${res._id}`]);
        //now we navigate to /lists/res._id
    })
  }
}
