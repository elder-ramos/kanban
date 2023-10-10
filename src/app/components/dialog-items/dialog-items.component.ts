import { Component, Inject, Input } from '@angular/core';
import {DIALOG_DATA, DialogRef} from '@angular/cdk/dialog';

@Component({
  selector: 'app-dialog-items',
  templateUrl: './dialog-items.component.html',
  styleUrls: ['./dialog-items.component.scss']
})
export class DialogItemsComponent {

  @Input() autor: string = '';
  @Input() name: string = '';

  constructor(@Inject(DIALOG_DATA) public data: any,
  public dialogRef: DialogRef) {}

  ngOnInit(): void{}
}
