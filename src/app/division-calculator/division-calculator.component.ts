// division-calculator.component.ts
import { Component } from '@angular/core';
import { DivisionService } from '../division.service';

@Component({
  selector: 'app-division-calculator',
  templateUrl: './division-calculator.component.html',
  styleUrls: ['./division-calculator.component.css'],
})
export class DivisionCalculatorComponent {
  dividend: number = 0;
  divisor: number = 0;
  result: number | undefined;

  constructor(private divisionService: DivisionService) {}

  calculateDivision() {
    this.result = this.divisionService.recursiveDivision(this.dividend, this.divisor);
  }
}
