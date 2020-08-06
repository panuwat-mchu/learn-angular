import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from "../shared/layout/layout.component";
import { ProfileComponent } from './profile.component';
import { ProfilePersonalInfoComponent } from './profile-personal-info/profile-personal-info.component';
import { ProfilePasswordSecComponent } from './profile-password-sec/profile-password-sec.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {
        path: '', component: ProfileComponent, children: [
          { path: 'personal-info', component: ProfilePersonalInfoComponent },
          { path: 'password-sec', component: ProfilePasswordSecComponent }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
