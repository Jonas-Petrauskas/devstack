import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-developer-login',
  templateUrl: './developer-login.component.html',
  styleUrls: ['./developer-login.component.scss']
})
export class DeveloperLoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private appState: AppStateService,
  ) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.email);
    console.log(this.password);

    // TODO: Authentication here!
    if (true) {
      this.router.navigate(['developer/dashboard']);
      this.appState.loginAsCompany();
      this.appState.hideLogins();
    }
    else {
      console.log('INVALID CREDENTIALS!');
    }
  }

}
