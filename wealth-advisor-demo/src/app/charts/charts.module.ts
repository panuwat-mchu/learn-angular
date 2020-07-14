import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartSavingComponent } from './chart-saving/chart-saving.component';
import { ChartCashflowComponent } from './chart-cashflow/chart-cashflow.component';
import { ChartReturnComponent } from './chart-return/chart-return.component';
import { ChartInvestComponent } from './chart-invest/chart-invest.component';
import { ChartExpenseComponent } from './chart-expense/chart-expense.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ChartSavingComponent, ChartCashflowComponent, ChartReturnComponent, ChartInvestComponent, ChartExpenseComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ChartExpenseComponent,
    ChartSavingComponent,
    ChartCashflowComponent,
    ChartInvestComponent,
    ChartReturnComponent
  ]
})
export class ChartsModule { }
