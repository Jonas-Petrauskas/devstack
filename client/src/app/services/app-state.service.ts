import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  appState = new BehaviorSubject<'loggedOut'|'company'|'developer'>('loggedOut');

  constructor() { }

  logout() { this.appState.next('loggedOut'); }
  loginAsCompany() { this.appState.next('company'); }
  loginAsDeveloper() { this.appState.next('developer'); }
}
