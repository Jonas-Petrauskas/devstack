import { Component, OnInit } from '@angular/core';
import { ApiClientService } from 'src/app/services/api-client.service';
import { User } from 'src/app/interfaces/User';



@Component({
  selector: 'app-developer-dashboard',
  templateUrl: './developer-dashboard.component.html',
  styleUrls: ['./developer-dashboard.component.scss']
})
export class DeveloperDashboardComponent implements OnInit {

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
