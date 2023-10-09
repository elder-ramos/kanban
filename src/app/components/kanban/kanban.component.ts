import { Component } from '@angular/core';
import {NgFor} from '@angular/common';
import { Coluna } from 'src/app/models/coluna.model';
import { Quadro } from 'src/app/models/quadro.model';

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { Task } from 'src/app/models/task.model';


@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss'],
})
export class KanbanComponent {

  quadro: Quadro = new Quadro('Kanban', 
    [new Coluna('todo', [new Task('Do Kanban', 'Elder'), new Task('Learn Angular', 'Kassio'), new Task('Learn PHP', 'Weydson')]),
    new Coluna('wip', [new Task('Do Kanban task', 'Elder'), new Task('Home screen', 'Kassio'), new Task('Forms', 'Weydson')]),
    new Coluna('testing', [new Task('Backend logic', 'Weydson'), new Task('Angular theme', 'Elder')]),
    new Coluna('done', [new Task('Contratação', '@Todos')])
  ]);


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
