import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTripComponent } from './add-edit-trip.component';

describe('AddEditTripComponent', () => {
  let component: AddEditTripComponent;
  let fixture: ComponentFixture<AddEditTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditTripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
