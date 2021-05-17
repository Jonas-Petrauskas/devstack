import { Component, OnInit, Input } from '@angular/core';
import { Developer } from 'src/app/interfaces/Developer';
import { ApiClientService } from 'src/app/services/api-client.service';


@Component({
  selector: 'app-developer-dashboard-main',
  templateUrl: './developer-dashboard-main.component.html',
  styleUrls: ['./developer-dashboard-main.component.scss']
})
export class DeveloperDashboardMainComponent implements OnInit {
  @Input()
  photo: {url: string, id: number} = {url: 'https://ca.slack-edge.com/T0WU5R8NT-U014XEG2PJ4-bb2847571bc1-512', id: 1};
  @Input()
  bio: {desc: string, id: number} = {desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', id: 1};

  @Input()
  user?: Developer;
  
  expanded: boolean = false;

  constructor(private client: ApiClientService) { }

  ngOnInit(): void {
  }

}
