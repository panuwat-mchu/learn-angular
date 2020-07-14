import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvisorsRoutingModule } from './advisors-routing.module';
import { AdvisorsComponent } from './advisors/advisors.component';
import { AdvisorComponent } from './advisor/advisor.component';
import { AdvisorAsideComponent } from './advisor-aside/advisor-aside.component';


@NgModule({
  declarations: [AdvisorsComponent, AdvisorComponent, AdvisorAsideComponent],
  imports: [
    CommonModule,
    AdvisorsRoutingModule
  ],
  exports: [
    AdvisorAsideComponent
  ]
})
export class AdvisorsModule { }
