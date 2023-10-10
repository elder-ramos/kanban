import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanbanComponent } from './components/kanban/kanban.component';
import { DialogItemsComponent } from './components/dialog-items/dialog-items.component';

const routes: Routes = [
  {path: '', component: KanbanComponent},
  {path: ':id', component: DialogItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
