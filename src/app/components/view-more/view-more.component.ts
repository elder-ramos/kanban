import { Component, Inject, Input } from '@angular/core';
import {DIALOG_DATA, DialogRef} from '@angular/cdk/dialog';

@Component({
  selector: 'app-view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.scss']
})
export class ViewMoreComponent {

  @Input() autor: string = '';
  @Input() name: string = '';

  constructor(@Inject(DIALOG_DATA) public data: any,
  public dialogRef: DialogRef) {}

  ngOnInit(): void{}
}
