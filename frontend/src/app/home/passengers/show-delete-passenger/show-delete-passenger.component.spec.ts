import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDeletePassengerComponent } from './show-delete-passenger.component';

describe('ShowDeletePassengerComponent', () => {
  let component: ShowDeletePassengerComponent;
  let fixture: ComponentFixture<ShowDeletePassengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDeletePassengerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDeletePassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
