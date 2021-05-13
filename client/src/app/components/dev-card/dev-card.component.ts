import { Component, Input, OnInit } from '@angular/core';
import { User, defaultUser } from 'src/app/interfaces/User';
import { ApiClientService } from 'src/app/services/api-client.service';

@Component({
  selector: 'app-dev-card',
  templateUrl: './dev-card.component.html',
  styleUrls: ['./dev-card.component.scss']
})

export class DevCardComponent implements OnInit {
  @Input()
  photo: {url: string, id: number} = {url: 'https://ca.slack-edge.com/T0WU5R8NT-U014XEG2PJ4-bb2847571bc1-512', id: 1};
  @Input()
  bio: {desc: string, id: number} = {desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', id: 1};

  @Input()
  user?: User;

  expanded: boolean = false;
  careerExpanded: boolean = false; 


  constructor(private client: ApiClientService) { }

  ngOnInit(): void {
  }

  showExpanded(selectedDrop: string): void {
    if (selectedDrop === 'bio') {
      !this.expanded ? this.expanded = true : this.expanded = false;
    }
    if (selectedDrop === 'career') {
      !this.careerExpanded ? this.careerExpanded = true : this.careerExpanded = false
    }
  }
  
}
