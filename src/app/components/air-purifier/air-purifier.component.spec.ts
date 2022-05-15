import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirPurifierComponent } from './air-purifier.component';

describe('AirPurifierComponent', () => {
  let component: AirPurifierComponent;
  let fixture: ComponentFixture<AirPurifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirPurifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirPurifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
