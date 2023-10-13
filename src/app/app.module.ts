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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'

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
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
