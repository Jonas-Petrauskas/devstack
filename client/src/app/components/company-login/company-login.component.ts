import { Component, OnInit } from '@angular/core';
import {CompanyLoginForm} from './company-login-form';

@Component({
  selector: 'app-company-login',
  templateUrl: './company-login.component.html',
  styleUrls: ['./company-login.component.scss']
})
export class CompanyLoginComponent implements OnInit {
  
  companyLoginForm = new CompanyLoginForm();

  constructor() { }

  ngOnInit(): void {
    
  }

}
