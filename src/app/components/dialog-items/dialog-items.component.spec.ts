import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogItemsComponent } from './dialog-items.component';

describe('DialogItemsComponent', () => {
  let component: DialogItemsComponent;
  let fixture: ComponentFixture<DialogItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogItemsComponent]
    });
    fixture = TestBed.createComponent(DialogItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
