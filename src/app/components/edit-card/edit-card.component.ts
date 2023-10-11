import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss']
})
export class EditCardComponent {

  constructor(@Inject(DIALOG_DATA) public data: any,
  public dialogRef: DialogRef) {};

  ngOnInit(): void{}

}
