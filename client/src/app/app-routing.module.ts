import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { CompanyDashboardComponent } from './components/company-dashboard/company-dashboard.component';

const routes: Routes = [
  { path: '', component: CompanyDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
