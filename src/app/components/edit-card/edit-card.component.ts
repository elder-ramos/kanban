import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss']
})
export class EditCardComponent {

  editForm!: FormGroup;

  constructor(@Inject(DIALOG_DATA) public data: any,
  public dialogRef: DialogRef,
  public fb: FormBuilder) {};

  ngOnInit(): void{
    this.editForm = this.fb.group({
      taskName: [this.data.taskName, [Validators.required]],
      autor: [this.data.autor, [Validators.required]],
      descricao: [this.data.descricao]
    })
  }

  sendValues(formValue: any){
    const taskEdit: Task = {
      id: this.data.id,
      autor: formValue.autor,
      taskName: formValue.taskName,
      descricao: formValue.descricao,
      colunaId: this.data.colunaId
    }
    const originalTask: Task = this.data;
    if(JSON.stringify(taskEdit) == (JSON.stringify(originalTask))){
      // Se não houver mudança, não haverá requests.
      window.alert('Sem mudanças. Fechando formulário.');
      this.editForm.reset();
      this.dialogRef.close();
    }else{
      console.log('Diferentes')
    }
  }

  close(){
    this.editForm.reset();  
    this.dialogRef.close();
  }

}
