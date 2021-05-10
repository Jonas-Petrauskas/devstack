import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-job-card',
  templateUrl: './home-job-card.component.html',
  styleUrls: ['./home-job-card.component.scss']
})
export class HomeJobCardComponent implements OnInit {

  @Input()
  name: string = '';
  @Input()
  title: string = '';
  @Input()
  description: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
