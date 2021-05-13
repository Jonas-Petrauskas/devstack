import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './components/app-component/app.component';
import { CompanyDashboardComponent } from './components/company-dashboard/company-dashboard.component';
import { CompanyLoginComponent } from './components/company-login/company-login.component';
import { CompanySignUpComponent } from './components/company-sign-up/company-sign-up.component';
import { DevCardComponent } from './components/dev-card/dev-card.component';
import { DeveloperLoginComponent } from './components/developer-login/developer-login.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { HomeComponent } from './components/home/home.component';
import { HomeJobCardComponent } from './components/home-job-card/home-job-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarDropdownComponent } from './components/navbar-dropdown/navbar-dropdown.component';
import { NavbarLogoutComponent } from './components/navbar-logout/navbar-logout.component';
import { SearchComponent } from './components/search/search.component';
import { SvgItemComponent } from './components/svg-item/svg-item.component';


@NgModule({
  declarations: [
    AppComponent,
    CompanyDashboardComponent,
    CompanyLoginComponent,
    CompanySignUpComponent,
    DevCardComponent,
    DeveloperLoginComponent,
    DropdownComponent,
    HomeComponent,
    HomeJobCardComponent,
    NavbarComponent,
    NavbarDropdownComponent,
    NavbarLogoutComponent,
    SearchComponent,
    SvgItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
