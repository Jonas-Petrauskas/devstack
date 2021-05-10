import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-main-display',
  templateUrl: './home-main-display.component.html',
  styleUrls: ['./home-main-display.component.scss']
})
export class HomeMainDisplayComponent implements OnInit {

  @Input()
  buttonName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
