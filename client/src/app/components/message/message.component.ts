import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/interfaces/Message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input()
  message?: Message;

  // sender: defaultUser,
  // messageText: " a message",
  // timestamp: new Date,
  

  constructor() { }

  ngOnInit(): void {
  }

}
