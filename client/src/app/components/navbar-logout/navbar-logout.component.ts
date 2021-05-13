import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-logout',
  templateUrl: './navbar-logout.component.html',
  styleUrls: ['./navbar-logout.component.scss']
})
export class NavbarLogoutComponent implements OnInit {

  @Input()
  buttonName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
