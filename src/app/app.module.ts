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
<<<<<<< Updated upstream
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { WSocketComponent } from './components/w-socket/w-socket.component';
import { CreateColumnComponent } from './components/create-column/create-column.component'
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    KanbanComponent,
    ViewMoreComponent,
    EditCardComponent,
    CreateCardComponent,
    WSocketComponent,
    CreateColumnComponent,
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
