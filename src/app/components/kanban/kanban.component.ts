import { Component } from '@angular/core';
// Drag/Drop lib
import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
// Local imports
import { EditCardComponent } from '../edit-card/edit-card.component';
import { Quadro } from 'src/app/models/quadro.model';
import { Task } from 'src/app/models/task.model';
import { ApiService } from 'src/app/services/api.service';
// Dialog imports
import { ViewMoreComponent } from '../view-more/view-more.component';
import { MatDialog } from '@angular/material/dialog';
import { CreateCardComponent } from '../create-card/create-card.component';
import { Coluna } from 'src/app/models/coluna.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss'],
})
export class KanbanComponent {

  quadro: Observable<any> | undefined;
  colunas!: any;
  tasks!: any;

  constructor(private apiService: ApiService, 
    public dialog: MatDialog){}

  async ngOnInit() {
      this.apiService.get('http://localhost:3000/quadros/1').subscribe((data: any) => {
      this.quadro = data
    });

    // Buscar colunas
    this.apiService.get('http://localhost:3000/quadros/1/colunas?_embed=tasks').subscribe((data: any) => {
    this.colunas = data;
  })};

  // Buscar tasks
  getTasks(id:number){
    console.log('Foi')
    this.apiService.get('https://localhost:3000/colunas/' + id + '/tasks')
  }


  // Dialog Buttons
  openDialogMore(name:string, author:string, descricao?: string): void {
    this.dialog.open(ViewMoreComponent, {
      data: {autor: author, name: name, descricao: descricao}
    });
  }

  openDialogEdit(id: number, name:string, author:string, descricao?: string){
    this.dialog.open(EditCardComponent, {
      data: {autor: author, name: name, descricao: descricao}
    });
  }

  // Apenas abrir o dialog e preencher o form do modal
  openDialogAdd(colunaId: number){
    this.dialog.open(CreateCardComponent,{
      data: {columnId: colunaId}
    })
    console.log('openDialogAdd columnId = ', colunaId)
  }

  // Drag/Drop event
  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log(event.container.data)
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      console.log("Antigo container:", event.previousContainer.data);
      console.log("Novo container:", event.container.data);
      console.log("PreviousIndex: ", event.previousIndex);
      console.log("NewIndex: ", event.currentIndex);
    }
  }
}