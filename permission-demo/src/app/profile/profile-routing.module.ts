import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from "../shared/layout/layout.component";
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', component: ProfileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
