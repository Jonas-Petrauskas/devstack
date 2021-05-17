import { Component, OnInit } from '@angular/core';

import { ChatService } from '../../services/chat.service';
import { Chat, defaultChat } from 'src/app/interfaces/Chat';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  expanded: boolean = false;
  chats: Chat[]= [];
  openChat: Chat = defaultChat;
  chatIsOpen: boolean = true;
  appState: 'loggedOut'|'company'|'developer' = 'loggedOut'

  constructor(
    private chatService: ChatService,
    private appStateService: AppStateService
    ) { }

    ngOnInit(): void {
    this.appStateService.appState.subscribe((state) =>{
      this.appState = state
      if (this.appState !== 'loggedOut') {
            this.chatService.signIn(this.appState, '1')
      }
    })
    
    this.chatService.chats.subscribe((chats) => {
      this.chats = chats;
      console.log(chats)
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
    console.log(this.appState)
  }


}
