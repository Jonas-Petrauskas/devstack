import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.scss']
})
export class HomeButtonComponent implements OnInit {

  @Input()
  buttonName: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
