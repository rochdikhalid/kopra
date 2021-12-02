import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDeleteTripComponent } from './show-delete-trip.component';

describe('ShowDeleteTripComponent', () => {
  let component: ShowDeleteTripComponent;
  let fixture: ComponentFixture<ShowDeleteTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDeleteTripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDeleteTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
