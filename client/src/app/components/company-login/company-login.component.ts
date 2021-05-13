import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-company-login',
  templateUrl: './company-login.component.html',
  styleUrls: ['./company-login.component.scss']
})
export class CompanyLoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private appState: AppStateService,
  ) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.username);
    console.log(this.password);

    // TODO: Authentication here!
    if (true) {
      this.router.navigate(['company/dashboard']);
      this.appState.loginAsCompany();
      this.appState.hideLogins();
    }
    else {
      console.log('INVALID CREDENTIALS!');
    }
  }

  submitOnEnter(event: { keyCode: number }) {
    if (event.keyCode === 13) this.submit();
  }

}
