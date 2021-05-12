import { Component, OnInit } from '@angular/core';
import {DeveloperLoginForm} from './developer-login-form'

@Component({
  selector: 'app-developer-login',
  templateUrl: './developer-login.component.html',
  styleUrls: ['./developer-login.component.scss']
})
export class DeveloperLoginComponent implements OnInit {

  developerLoginForm = new DeveloperLoginForm();

  constructor() { }

  ngOnInit(): void {
  }

}
