import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSpotlightedDealComponent } from './home-spotlighted-deal.component';

describe('HomeSpotlightedDealComponent', () => {
  let component: HomeSpotlightedDealComponent;
  let fixture: ComponentFixture<HomeSpotlightedDealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSpotlightedDealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSpotlightedDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
