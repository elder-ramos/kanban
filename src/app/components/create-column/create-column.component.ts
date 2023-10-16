import { Component, Inject } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { ApiService } from 'src/app/services/api.service';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Coluna } from 'src/app/models/coluna.model';

@Component({
  selector: 'app-create-column',
  templateUrl: './create-column.component.html',
  styleUrls: ['./create-column.component.scss']
})
export class CreateColumnComponent {

  columnId!: number;

  addColumn!: FormGroup;

  constructor(private apiService: ApiService, 
    @Inject(DIALOG_DATA) public data: any,
    public dialogRef: DialogRef, 
    private fb: FormBuilder){}

    ngOnInit(): void{
      this.addColumn = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(2)]],
        quadroId: [1]
      });
    }

  sendValues(formValue: any){
    const newColumn: Coluna = {
      name: formValue.name,
      quadroId: formValue.quadroId
    }
    this.apiService.createColumn(newColumn).subscribe();

    this.addColumn.reset();
    this.dialogRef.close();
    window.alert('Enviado com sucesso!')
    window.location.reload();
  }

  close(){
    this.addColumn.reset();
    this.dialogRef.close();
  }
}
// import { Component,  Inject, Input } from '@angular/core';
