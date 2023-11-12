// division.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DivisionService {
  recursiveDivision(a: number, b: number): number {
    if (a >= b) {
      return 1 + this.recursiveDivision(a - b, b); // Рекурсивний виклик зменшеного a і того ж b, збільшуючи лічильник на 1
    } else if (b > a) {
      return a; // Вивести результат останнього ділення, коли b > a
    } else {
      return 0; // Обидва числа дорівнюють одне одному, результат дорівнює 0 (або невизначено)
    }
  }
}
