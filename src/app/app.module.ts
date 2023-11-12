import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Імпортуйте FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DivisionCalculatorComponent } from './division-calculator/division-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    DivisionCalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Додайте цей рядок для підключення FormsModule
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
