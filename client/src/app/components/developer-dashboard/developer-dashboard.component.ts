import { Component, OnInit } from '@angular/core';
import { ApiClientService } from 'src/app/services/api-client.service';
import { User } from 'src/app/interfaces/User';
// import { experience1, experience2, experience3, education1, education2, education3 } from '../developer-dashboard-other/experience-education';



@Component({
  selector: 'app-developer-dashboard',
  templateUrl: './developer-dashboard.component.html',
  styleUrls: ['./developer-dashboard.component.scss']
})
export class DeveloperDashboardComponent implements OnInit {

  // experience1 = experience1;
  // experience2 = experience2;
  // experience3 = experience3;
  // education1 = education1;
  // education2 = education2;
  // education3 = education3;


  user?: User;


  constructor(private client: ApiClientService) { }

  ngOnInit(): void {
    this.getUsers();
  }


  getUsers(): void {
    this.client.getAllUsers()
    .subscribe((users) => this.user = users[3]);
  }
}
