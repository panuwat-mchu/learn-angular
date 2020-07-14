import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestmentsRoutingModule } from './investments-routing.module';
import { InvestmentPortionChartComponent } from './investment-portion-chart/investment-portion-chart.component';
import { InvestmentReturnChartComponent } from './investment-return-chart/investment-return-chart.component';


@NgModule({
  declarations: [InvestmentPortionChartComponent, InvestmentReturnChartComponent],
  imports: [
    CommonModule,
    InvestmentsRoutingModule
  ],
  exports: [
    InvestmentPortionChartComponent,
    InvestmentReturnChartComponent
  ]
})
export class InvestmentsModule { }
