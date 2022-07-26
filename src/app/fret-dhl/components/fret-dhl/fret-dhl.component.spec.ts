import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FretDhlComponent } from './fret-dhl.component';

describe('FretDhlComponent', () => {
  let component: FretDhlComponent;
  let fixture: ComponentFixture<FretDhlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FretDhlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FretDhlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
