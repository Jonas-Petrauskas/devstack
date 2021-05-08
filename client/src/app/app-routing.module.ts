import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { CompanyDashboardComponent } from './components/company-dashboard/company-dashboard.component';
import { CompanyLoginComponent } from './components/company-login/company-login.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
const routes: Routes = [
  { path: '', component: CompanyDashboardComponent },
  // { path: '', component: CompanyLoginComponent },
  // { path: '', component: DropdownComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
