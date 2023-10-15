import { Component } from '@angular/core';
// Drag/Drop lib
import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
// Local imports
import { EditCardComponent } from '../edit-card/edit-card.component';
import { Task } from 'src/app/models/task.model';
import { ApiService } from 'src/app/services/api.service';
// Dialog imports
import { ViewMoreComponent } from '../view-more/view-more.component';
import { MatDialog } from '@angular/material/dialog';
import { CreateCardComponent } from '../create-card/create-card.component';
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

  openDialogAdd(columnId: number){
    console.log('Entrou');
    this.dialog.open(CreateCardComponent,{
      data: {columnId: columnId}
    });
  }

  // Drag/Drop event
  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log(event.previousIndex)
      console.log(event.currentIndex)
      event.container.data.forEach((task) => (this.apiService.updateTaskColumn(task), console.log(`Nova coluna ${task.id}:`, task)));
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      event.container.data.forEach((task) => (this.apiService.updateTaskColumn(task)));
    }
  }
}