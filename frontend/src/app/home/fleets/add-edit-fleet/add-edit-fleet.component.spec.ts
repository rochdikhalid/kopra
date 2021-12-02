import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFleetComponent } from './add-edit-fleet.component';

describe('AddEditFleetComponent', () => {
  let component: AddEditFleetComponent;
  let fixture: ComponentFixture<AddEditFleetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditFleetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditFleetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
