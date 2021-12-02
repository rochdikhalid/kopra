import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDeleteStationComponent } from './show-delete-station.component';

describe('ShowDeleteComponent', () => {
  let component: ShowDeleteStationComponent;
  let fixture: ComponentFixture<ShowDeleteStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDeleteStationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDeleteStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
