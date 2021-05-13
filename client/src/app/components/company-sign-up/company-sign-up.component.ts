import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms' 


@Component({
  selector: 'app-company-sign-up',
  templateUrl: './company-sign-up.component.html',
  styleUrls: ['./company-sign-up.component.scss']
})
export class CompanySignUpComponent implements OnInit {

    profileForm = new FormGroup ({
    username: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl('')
  })


  constructor() { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.profileForm.reset();
  }

}
