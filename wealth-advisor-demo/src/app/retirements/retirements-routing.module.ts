import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetirementsComponent } from './retirements/retirements.component';
import { RetirementComponent } from './retirement/retirement.component';
import { RetirementEditComponent } from './retirement-edit/retirement-edit.component';
import { AdvisorAsideComponent } from '../advisors/advisor-aside/advisor-aside.component';
import { MainLayoutComponent } from '../shared/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: 'retirements/:id', component: MainLayoutComponent,
    children: [
      { path: '', component: RetirementComponent },
      { path: '', outlet: 'aside', component: AdvisorAsideComponent },
      { path: 'edit', outlet: 'aside', component: RetirementEditComponent },
      { path: 'advisor', outlet: 'aside', component: AdvisorAsideComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetirementsRoutingModule { }
