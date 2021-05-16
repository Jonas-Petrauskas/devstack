import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  expanded: boolean = false;
  // chats: 

  constructor() { }

  ngOnInit(): void {
  }

  expandChat(): void {
    this.expanded ? this.expanded = false : this.expanded = true;
  }


}
