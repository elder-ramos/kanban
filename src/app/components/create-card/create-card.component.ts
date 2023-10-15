import { Component,  Inject } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { ApiService } from 'src/app/services/api.service';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';


@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss']
})
export class CreateCardComponent {

  constructor(private apiService: ApiService, @Inject(DIALOG_DATA) public data: any,
  public dialogRef: DialogRef){}

  createTask(name: string, autor: string, descricao: string, colunaId: number){
    const newTask: Task = {
      taskName: name,
      autor: autor,
      descricao: descricao,
      colunaId: colunaId
    }

    this.apiService.createTask(this.data.columnId, newTask).subscribe((createdTask) => (console.log(createdTask)))
  }
}