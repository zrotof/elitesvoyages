import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarParisComponent } from './car-paris.component';

describe('CarParisComponent', () => {
  let component: CarParisComponent;
  let fixture: ComponentFixture<CarParisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarParisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarParisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
