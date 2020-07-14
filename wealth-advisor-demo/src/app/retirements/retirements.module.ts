import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetirementsRoutingModule } from './retirements-routing.module';
import { RetirementComponent } from './retirement/retirement.component';
import { RetirementsComponent } from './retirements/retirements.component';
import { SharedModule } from '../shared/shared.module';
import { AdvisorsModule } from '../advisors/advisors.module';
import { RetirementEditComponent } from './retirement-edit/retirement-edit.component';
import { ChartsModule } from '../charts/charts.module';
import { InvestmentsModule } from '../investments/investments.module';


@NgModule({
  declarations: [
    RetirementComponent, 
    RetirementsComponent, 
    RetirementEditComponent
  ],
  imports: [
    CommonModule,
    RetirementsRoutingModule,
    SharedModule,
    AdvisorsModule,
    ChartsModule,
    InvestmentsModule
  ]
})
export class RetirementsModule { }
