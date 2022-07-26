import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTourismComponent } from './home-tourism.component';

describe('HomeTourismComponent', () => {
  let component: HomeTourismComponent;
  let fixture: ComponentFixture<HomeTourismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTourismComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTourismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
