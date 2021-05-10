import { Component, Input, OnInit } from '@angular/core';
import { mockUser, User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-dev-card',
  templateUrl: './dev-card.component.html',
  styleUrls: ['./dev-card.component.scss']
})

export class DevCardComponent implements OnInit {
  @Input()
  firstName: string = '';
  @Input()
  lastName: string = '';
  @Input()
  location: {name: string, id:number} = {name: 'Barcelona Spain', id: 1};
  @Input()
  photo: {url: string, id: number} = {url: 'https://ca.slack-edge.com/T0WU5R8NT-U014XEG2PJ4-bb2847571bc1-512', id: 1};
  @Input()
  experience: {name: string, id: number, tagName: string} = {name: 'Junior', id: 1, tagName: ''};
  @Input()
  position: {name: string, id: number} = {name: 'Fullstack', id: 1};
  @Input()
  technologies: {name: string, id: number, url: string}[] = [{name: 'CSS', id: 1, url: 'https://img.icons8.com/color/72/css3.png'},{name: 'Java', id: 2, url: 'https://img.icons8.com/color/2x/java-coffee-cup-logo.png'}, {name: 'C#', id: 3, url:"https://img.icons8.com/ios-filled/72/c-sharp-logo.png"}];
  @Input()
  bio: {desc: string, id: number} = {desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', id: 1};
  @Input()
  userId: number = 1;

  @Input()
  userDetails: User = mockUser;

  constructor() { }

  ngOnInit(): void {
  }

}
