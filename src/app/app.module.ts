import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KanbanComponent } from './components/kanban/kanban.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ViewMoreComponent } from './components/view-more/view-more.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon';
import { EditCardComponent } from './components/edit-card/edit-card.component';
import { CreateCardComponent } from './components/create-card/create-card.component';

@NgModule({
  declarations: [
    AppComponent,
    KanbanComponent,
    ViewMoreComponent,
    EditCardComponent,
    CreateCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    HttpClientModule,
    RouterModule,
    MatDialogModule,
    MatIconModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
