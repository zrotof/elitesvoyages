import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVisasComponent } from './home-visas.component';

describe('HomeVisasComponent', () => {
  let component: HomeVisasComponent;
  let fixture: ComponentFixture<HomeVisasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeVisasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVisasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
