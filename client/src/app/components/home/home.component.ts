import { Component, OnInit, Input } from '@angular/core';
import { cardData } from './card-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cards = cardData;

  constructor() { }

  ngOnInit(): void {
  }

}
