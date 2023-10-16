import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WSocketComponent } from './w-socket.component';

describe('WSocketComponent', () => {
  let component: WSocketComponent;
  let fixture: ComponentFixture<WSocketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WSocketComponent]
    });
    fixture = TestBed.createComponent(WSocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
