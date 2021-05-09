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

  loginExpanded: boolean = false;
  signupExpanded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getLoginOptions(): {label: string, link: string}[] {
    return [
      {label: 'COMPANY', link: ''},
      {label: 'CANDIDATE', link: ''},
    ]
  }

  getSignupOptions(): {label: string, link: string}[] {
    return [
      {label: 'COMPANY', link: ''},
      {label: 'CANDIDATE', link: ''},
    ]
  }

  onLoginExpand($event: any) {
    if (this.signupExpanded) this.signupExpanded = false;
    this.loginExpanded = true;
  }

  onLoginCollapse($event: any) { this.loginExpanded = false; }

  onSignupExpand($event: any) {
    if (this.loginExpanded) this.loginExpanded = false;
    this.signupExpanded = true;
  }

  onSignupCollapse($event: any) { this.signupExpanded = false; }

}
