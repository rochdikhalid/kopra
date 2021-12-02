import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDeleteFleetComponent } from './show-delete-fleet.component';

describe('ShowDeleteFleetComponent', () => {
  let component: ShowDeleteFleetComponent;
  let fixture: ComponentFixture<ShowDeleteFleetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDeleteFleetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDeleteFleetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
