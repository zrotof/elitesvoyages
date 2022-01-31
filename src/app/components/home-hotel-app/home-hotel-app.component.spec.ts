import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHotelAppComponent } from './home-hotel-app.component';

describe('HomeHotelAppComponent', () => {
  let component: HomeHotelAppComponent;
  let fixture: ComponentFixture<HomeHotelAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeHotelAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHotelAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
