import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  appState = new BehaviorSubject<'loggedOut'|'company'|'developer'>('developer');

  companyLoginShown = new BehaviorSubject<boolean>(false);
  developerLoginShown = new BehaviorSubject<boolean>(false);

  constructor() { }

  logout() { this.appState.next('loggedOut'); }
  loginAsCompany() { this.appState.next('company'); }
  loginAsDeveloper() { this.appState.next('developer'); }

  showCompanyLogin() { this.companyLoginShown.next(true); }
  showDeveloperLogin() { this.developerLoginShown.next(true); }
  hideLogins() {
    this.companyLoginShown.next(false);
    this.developerLoginShown.next(false);
  }

}
