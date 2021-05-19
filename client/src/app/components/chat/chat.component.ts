import { Component, OnDestroy, OnInit} from '@angular/core';

import { ChatService } from '../../services/chat.service';
import { Chat, defaultChat } from 'src/app/interfaces/Chat';
import { AppStateService } from 'src/app/services/app-state.service';
import { defaultDeveloper, Developer } from 'src/app/interfaces/Developer';
import { Company, defaultCompany } from 'src/app/interfaces/Company';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy{

  expanded: boolean = true;
  chats: Chat[]= [];
  chatIsOpen: boolean = false;
  openIndex: number = 0;
  appState: 'loggedOut'|'company'|'developer' = 'loggedOut'
  userInput: string = '';
  container: any;
  // signedinPhoto: string = this.a;
  activeUser = {
    id: '',
    name: '',
    photo_path: '',
  }

  constructor(
    private chatService: ChatService,
    private appStateService: AppStateService
  ) { }

  ngOnInit(): void {
    this.appStateService.activeDeveloper.subscribe((developer) => {
      if (developer !== null) {
        this.activeUser.id = developer.id;
        this.activeUser.name = `${developer.first_name} ${developer.last_name}`;
        this.activeUser.photo_path = developer.photo_path;
      } else {
        
      }
    })
    this.chatService.chatExpanded.subscribe((expanded) => {
      this.expanded = expanded;
    })

    this.appStateService.activeCompany.subscribe((company) => {
      if (company !== null) {
        this.activeUser.id = company.id;
        this.activeUser.name = company.name;
        this.activeUser.photo_path = company.photo_path;
      }
    })
    
    this.appStateService.appState.subscribe((state) => {
      this.appState = state
      if (this.appState !== 'loggedOut') {
        this.chatService.signIn(this.appState, this.activeUser.id)
      }
    })


    this.chatService.chats.subscribe((chats) => {
      this.chats = chats;
    })
  }

  ngOnDestroy() {
    this.chatService.signOut();
    this.chatService.chats.next([]);
    this.chatService.chatExpanded.next(false);
  }

  expandChat(): void {
    this.expanded ? 
    this.chatService.chatExpanded.next(false) 
    : this.chatService.chatExpanded.next(true);
  }

  selectChat(index: number): void {
    this.openIndex = index;
    this.expanded = false;
    this.chatIsOpen = true;
    if (this.appState === 'developer') {
      this.chatService.readMessages(this.chats[index].company.id)
    } else if (this.appState === 'company') {
      this.chatService.readMessages(this.chats[index].developer.id)
    }
    
  }

  closeChat(): void {
    this.chatService.chatExpanded.next(true);
    this.chatIsOpen = false;
    if (this.appState === 'developer') {
      this.chatService.readMessages(this.chats[this.openIndex].company.id)
    } else if (this.appState === 'company') {
      this.chatService.readMessages(this.chats[this.openIndex].developer.id)
    }
    
  }

  sendMessage(message: string): void {
    console.log(this.openIndex)
    const id = this.appState === 'company' ? 
    this.chats[this.openIndex].developer.id 
    : this.chats[this.openIndex].company.id
    this.chatService.sendMessage(message, id);
    console.log(this.appState)
    this.userInput = '';
    console.log(this.chats)
  }


}
