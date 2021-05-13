import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './components/app-component/app.component';
import { CompanyDashboardComponent } from './components/company-dashboard/company-dashboard.component';
import { CompanyLoginComponent } from './components/company-login/company-login.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { SearchComponent } from './components/search/search.component';
import { DevCardComponent } from './components/dev-card/dev-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarDropdownComponent } from './components/navbar-dropdown/navbar-dropdown.component';
import { SvgItemComponent } from './components/svg-item/svg-item.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CompanyDashboardComponent,
    CompanyLoginComponent,
    DropdownComponent,
    SearchComponent,
    DevCardComponent,
    NavbarComponent,
    NavbarDropdownComponent,
    SvgItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
