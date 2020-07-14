import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SheetComponent } from './sheet/sheet.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';


@NgModule({
  declarations: [NavbarComponent,SidenavComponent, SheetComponent, HomeLayoutComponent, MainLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [
    NavbarComponent,
    SidenavComponent,
    SheetComponent,
    FormsModule,
    HomeLayoutComponent,
    MainLayoutComponent
  ]
})
export class SharedModule { }
