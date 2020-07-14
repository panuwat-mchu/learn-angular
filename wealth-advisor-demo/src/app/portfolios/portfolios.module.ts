import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfoliosRoutingModule } from './portfolios-routing.module';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AdvisorsModule } from '../advisors/advisors.module';


@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    CommonModule,
    PortfoliosRoutingModule,
    AdvisorsModule
  ]
})
export class PortfoliosModule { }
