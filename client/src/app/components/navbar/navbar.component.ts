import { Component, Input, OnInit } from '@angular/core';
import { NavbarDropdownComponent } from '../navbar-dropdown/navbar-dropdown.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input()
  state: "loggedOut" | "company" | "developer" = "loggedOut";

  @Input()
  blurBackground: boolean = false;

  loginExpanded: boolean = false;
  signupExpanded: boolean = false;

  showCompanyLogin: boolean = false;
  showCandidateLogin: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getLoginOptions(): {label: string, link: string}[] {
    return [
      {label: 'COMPANY', link: '/company/login'},
      {label: 'CANDIDATE', link: '/candidate/login'},
    ]
  }

  getSignupOptions(): {label: string, link: string}[] {
    return [
      {label: 'COMPANY', link: '/company/signup'},
      {label: 'CANDIDATE', link: '/candidate/signup'},
    ]
  }

  onLoginToggle($event: string): void {
    if (this.loginExpanded) { this.loginExpanded = false; }
    else {
      this.signupExpanded = false;
      this.loginExpanded = true;
    }
  }

  onSignupToggle($event: string): void {
    if (this.signupExpanded) { this.signupExpanded = false; }
    else {
      this.loginExpanded = false;
      this.signupExpanded = true;
    }
  }

  sliderHandler($event: string): void {
    if ($event === '/company/login') this.showCompanyLogin = true;
    if ($event === '/candidate/login') this.showCandidateLogin = true;
  }

  hideCompanyLogin() { this.showCompanyLogin = false; }
  hideCandidateLogin() { this.showCandidateLogin = false; }

}
