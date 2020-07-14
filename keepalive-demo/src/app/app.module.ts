import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgIdleKeepaliveModule } from "@ng-idle/keepalive";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgIdleKeepaliveModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
