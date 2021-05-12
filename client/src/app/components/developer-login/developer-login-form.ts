export class DeveloperLoginForm {
  firstName: string;
  lastName: string;
  email: string;

  constructor(firstName = '', lastName = '', email = '') {
    this.firstName = firstName,
    this.lastName = lastName,
    this.email = email
  }

  isValid(): boolean {
    if (this.firstName.length < 2) return false;
    if (this.lastName.length < 2) return false;
    if (!this.email.match(/[_.a-z0-9]+@[a-z0-9]+.[a-z]+/ig)) return false;
    
    return true;
  }

}