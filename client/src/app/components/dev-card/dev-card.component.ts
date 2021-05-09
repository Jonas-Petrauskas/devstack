import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dev-card',
  templateUrl: './dev-card.component.html',
  styleUrls: ['./dev-card.component.scss']
})

export class DevCardComponent implements OnInit {

  names: {name: string, id: number} = {name: 'Bernat Duran', id: 1};
  location: {name: string, id:number} = {name: 'Barcelona Spain', id: 1};
  photo: {url: string, id: number} = {url: 'https://ca.slack-edge.com/T0WU5R8NT-U014XEG2PJ4-bb2847571bc1-512', id: 1};
  experience: {name: string, id: number} = {name: 'Junior', id: 1};
  position: {name: string, id: number} = {name: 'Fullstack', id: 1};
  technologies: {name: string, id: number, url: string}[] = [{name: 'CSS', id: 1, url: 'https://img.icons8.com/color/72/css3.png'},{name: 'Java', id: 2, url: 'https://img.icons8.com/color/2x/java-coffee-cup-logo.png'}, {name: 'C#', id: 3, url:"https://img.icons8.com/ios-filled/72/c-sharp-logo.png"}];
  bio: {desc: string, id: number} = {desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', id: 1};
  userId: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
