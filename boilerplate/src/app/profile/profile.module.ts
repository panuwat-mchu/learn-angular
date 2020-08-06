import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfilePersonalInfoComponent } from './profile-personal-info/profile-personal-info.component';
import { ProfilePasswordSecComponent } from './profile-password-sec/profile-password-sec.component';
import { ProfilePasswordFormComponent } from './shared/profile-password-form/profile-password-form.component';


@NgModule({
  declarations: [ProfileComponent, ProfilePersonalInfoComponent, ProfilePasswordSecComponent, ProfilePasswordFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
