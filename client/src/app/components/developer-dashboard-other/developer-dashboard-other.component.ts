import { Component, OnInit, Input } from '@angular/core';
import { ApiClientService } from 'src/app/services/api-client.service';
import { User } from 'src/app/interfaces/User';

import { experienceHistoryMock } from './experienceHistory';
import { educationHistoryMock } from './educationHistory';



@Component({
  selector: 'app-developer-dashboard-other',
  templateUrl: './developer-dashboard-other.component.html',
  styleUrls: ['./developer-dashboard-other.component.scss']
})
export class DeveloperDashboardOtherComponent implements OnInit {

  // @Input()
  // user?: User;

  @Input() experienceHistory = experienceHistoryMock;
  @Input() educationHistory = educationHistoryMock;

  constructor(private client: ApiClientService) { }

  ngOnInit(): void {
  }

}
