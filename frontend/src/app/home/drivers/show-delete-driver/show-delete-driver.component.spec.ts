import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDeleteDriverComponent } from './show-delete-driver.component';

describe('ShowDeleteDriverComponent', () => {
  let component: ShowDeleteDriverComponent;
  let fixture: ComponentFixture<ShowDeleteDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDeleteDriverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDeleteDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
