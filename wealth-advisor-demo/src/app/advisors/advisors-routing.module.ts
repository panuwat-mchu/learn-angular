import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvisorComponent } from './advisor/advisor.component';


const routes: Routes = [
  { path: 'advisor', component: AdvisorComponent, outlet: 'aside' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvisorsRoutingModule { }
