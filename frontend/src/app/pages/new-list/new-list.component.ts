import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/services/task.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  constructor(private taskService : TaskService) { }

  ngOnInit(): void {
  }

  createList(title : string)
  {
    this.taskService.createList(title).subscribe((res)=>{
        console.log(res);

        //now we navigate to /lists/res._id
    })
  }
}
