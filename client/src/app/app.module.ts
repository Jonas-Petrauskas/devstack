import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app-component/app.component';
import { CompanyDashboardComponent } from './components/company-dashboard/company-dashboard.component';
import { CompanyLoginComponent } from './components/company-login/company-login.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyDashboardComponent,
    CompanyLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
