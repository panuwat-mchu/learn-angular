import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartRoutingModule } from './start-routing.module';
import { StartComponent } from './start/start.component';
import { SharedModule } from '../shared/shared.module';
import { StartListComponent } from './start-list/start-list.component';


@NgModule({
  declarations: [StartComponent, StartListComponent],
  imports: [
    CommonModule,
    StartRoutingModule,
    SharedModule
  ]
})
export class StartModule { }
