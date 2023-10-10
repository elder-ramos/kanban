import { Component } from '@angular/core';
// Drag/Drop lib
import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
// Local imports
import { Quadro } from 'src/app/models/quadro.model';
import { Task } from 'src/app/models/task.model';
import { ApiService } from 'src/app/services/api.service';
// Dialog imports
import { DialogItemsComponent } from '../dialog-items/dialog-items.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss'],
})
export class KanbanComponent {

  quadro: Quadro | undefined;

  constructor(private apiService: ApiService, 
    public dialog: MatDialog){}

  ngOnInit() {
    this.apiService.getAll().subscribe((data) => (this.quadro = data));
  }

  openDialog(name:string, author:string, descricao?: string): void {
    this.dialog.open(DialogItemsComponent, {
      minWidth: '300px',
      data: {autor: author, name: name, descricao: descricao}
    });
  }



  // Drag/Drop event
  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}