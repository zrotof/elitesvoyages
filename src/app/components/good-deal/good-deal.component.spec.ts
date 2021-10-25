import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodDealComponent } from './good-deal.component';

describe('GoodDealComponent', () => {
  let component: GoodDealComponent;
  let fixture: ComponentFixture<GoodDealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodDealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
