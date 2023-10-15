import { Component,  Inject, Input } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { ApiService } from 'src/app/services/api.service';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss']
})
export class CreateCardComponent {

  columnId!: number;

  addForm!: FormGroup;

  constructor(private apiService: ApiService, 
    @Inject(DIALOG_DATA) public data: any,
    public dialogRef: DialogRef, 
    private fb: FormBuilder){}

    ngOnInit(): void{
      this.addForm = this.fb.group({
        taskName: ['', [Validators.required, Validators.minLength(2)]],
        autor: ['', [Validators.required]],
        descricao: ['']
      });
    }

  sendValues(formValue: any){
    const newTask: Task = {
      taskName: formValue.taskName,
      autor: formValue.autor,
      descricao: formValue.descricao,
      colunaId: this.data.columnId
    }
    this.apiService.createTask(newTask).subscribe();

    this.addForm.reset();
    this.dialogRef.close();
    window.alert('Enviado com sucesso!')
    window.location.reload();
  }

  close(){
    this.addForm.reset();
    this.dialogRef.close();
  }

}
