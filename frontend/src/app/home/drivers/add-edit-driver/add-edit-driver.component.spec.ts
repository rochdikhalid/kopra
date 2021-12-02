import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDriverComponent } from './add-edit-driver.component';

describe('AddEditDriverComponent', () => {
  let component: AddEditDriverComponent;
  let fixture: ComponentFixture<AddEditDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDriverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
