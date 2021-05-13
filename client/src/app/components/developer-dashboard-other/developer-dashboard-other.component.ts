import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { ApiClientService } from 'src/app/services/api-client.service';

@Component({
  selector: 'app-developer-dashboard-other',
  templateUrl: './developer-dashboard-other.component.html',
  styleUrls: ['./developer-dashboard-other.component.scss']
})
export class DeveloperDashboardOtherComponent implements OnInit {
  @Input()
  photo: {url: string, id: number} = {url: 'https://ca.slack-edge.com/T0WU5R8NT-U014XEG2PJ4-bb2847571bc1-512', id: 1};
  @Input()
  bio: {desc: string, id: number} = {desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', id: 1};

  @Input()
  user?: User;
  
  expanded: boolean = false;

  constructor(private client: ApiClientService) { }

  ngOnInit(): void {
  }

}
