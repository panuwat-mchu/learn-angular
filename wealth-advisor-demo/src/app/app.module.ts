import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { PortfoliosModule } from './portfolios/portfolios.module';
import { StartModule } from './start/start.module';
import { RetirementsModule } from './retirements/retirements.module';
import { CoreModule } from './core/core.module';
import { ChartsModule } from './charts/charts.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    StartModule,
    RetirementsModule,
    PortfoliosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
