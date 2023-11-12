import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionCalculatorComponent } from '../division-calculator.component';

describe('DivisionCalculatorComponent', () => {
  let component: DivisionCalculatorComponent;
  let fixture: ComponentFixture<DivisionCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DivisionCalculatorComponent]
    });
    fixture = TestBed.createComponent(DivisionCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
