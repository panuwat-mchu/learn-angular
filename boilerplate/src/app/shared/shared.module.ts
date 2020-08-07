import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [
    //CommonModule,
    TranslateModule,
    HeaderComponent
  ]
})
export class SharedModule { }
