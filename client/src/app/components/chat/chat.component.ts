import { Component, OnInit } from '@angular/core';

import { ChatService } from '../../services/chat.service';
import { Chat, defaultChat } from 'src/app/interfaces/Chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  expanded: boolean = true;
  // TODO chats interface
  chats?: Chat[]= [defaultChat];
  openChat: Chat = defaultChat;
  chatIsOpen: boolean = false;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.chats.subscribe((chats) => {
      // this.chats = chats;
    })
  }

  expandChat(): void {
    this.expanded ? this.expanded = false : this.expanded = true;
  }

  selectChat(chat: Chat): void {
    this.openChat = chat;
    this.expanded = false;
    this.chatIsOpen = true;
  }

  closeChat(): void {
    this.expanded = true;
    this.chatIsOpen = false;
    
  }

  sendMessage(message: string): void {
    this.chatService.sendMessage(message,'1');
  }


}
