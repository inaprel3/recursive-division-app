import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DivisionCalculatorComponent } from './division-calculator/division-calculator.component';

const routes: Routes = [
  { path: '', component: DivisionCalculatorComponent }, // Додайте цей рядок
  // Додаткові маршрути, якщо вони потрібні
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
