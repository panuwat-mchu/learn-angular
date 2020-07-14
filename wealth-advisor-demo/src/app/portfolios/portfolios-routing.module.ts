import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeLayoutComponent } from '../shared/home-layout/home-layout.component';
import { AdvisorComponent } from '../advisors/advisor/advisor.component';


const routes: Routes = [
  {
    path: '', component: HomeLayoutComponent,
    children: [
      {
        path: 'portfolio', component: PortfolioComponent, children: [
          { path: 'advisor', component: AdvisorComponent }
        ]
      },
      { path: 'portfolio/advisor', component: AdvisorComponent, outlet: 'aside' }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfoliosRoutingModule { }
