export class CompanyLoginForm {
  firstName: string;
  lastName: string;
  email: string;

  constructor(firstName = '', lastName = '', email = '') {
    this.firstName = firstName,
    this.lastName = lastName,
    this.email = email
  }
}