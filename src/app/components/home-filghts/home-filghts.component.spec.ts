import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFilghtsComponent } from './home-filghts.component';

describe('HomeFilghtsComponent', () => {
  let component: HomeFilghtsComponent;
  let fixture: ComponentFixture<HomeFilghtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFilghtsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFilghtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
