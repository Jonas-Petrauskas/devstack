
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from 'socket.io-client';

import { Chat } from '../interfaces/Chat';
import { Company } from '../interfaces/Company';
import { Developer } from '../interfaces/Developer';
import { Message } from '../interfaces/Message';
import { AppStateService } from './app-state.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService  {

  socket?: any;
  state: 'loggedOut'|'company'|'developer' = 'loggedOut';
  
  chats = new BehaviorSubject<Chat[]>([]);
  chatExpanded = new BehaviorSubject<boolean>(false);
  
  constructor(
    private appState: AppStateService
  ) {
    this.appState.appState.subscribe((state) => {
      this.state = state;
      console.log("sumfins", state)
    });
  }

  signIn(userType: 'company' | 'developer', userId: string): void {
    this.socket = io(`http://localhost:3005`, {
      query: { userType, userId },
      auth: { token: 'abc' }
    });

    this.socket.on('connect', () => {
      console.log('connected at:', this.socket.id)
    })

    this.socket.on('disconnect', () => {
      console.log('disconnected at:', this.socket.id)
    })

    this.socket.on('message-history', (chatHistory: Chat[]) => {
      chatHistory.sort((a,b) => +new Date(b.last_timestamp) - +new Date(a.last_timestamp))
      this.chats.next(chatHistory);
    });

    this.socket.on('server-message', (chat: Chat) => {
      const newChats = this.chats.value.slice();
      let isNewChat = true;
      for (let i = 0; i < newChats.length; ++i) {
        if ( newChats[i].company.id === chat.company.id && newChats[i].developer.id === chat.developer.id) {
          newChats[i] = chat;
          isNewChat = false;
          break
        }
      }
      isNewChat ? newChats.unshift(chat) : false;
      newChats.sort((a,b) => +new Date(b.last_timestamp) - +new Date(a.last_timestamp))
      this.chats.next(newChats);
    });
  }

  signOut() {
    if (this.socket) this.socket.disconnect();
  }

  sendMessage( message: string, targetId: string) {
    console.log(message, targetId)
    this.socket.emit('client-message', { message, targetId });
  }

  readMessages(targetId: string) {
    this.socket.emit('client-read-message', { targetId });

    const newChats = this.chats.value.slice();

    for (let i = 0; i < newChats.length; ++i) {
      if (this.state === 'developer') {
        if (newChats[i].company.id === targetId) {
          newChats[i].developer_unreads = 0;
          newChats[i].messages.forEach((msg) => {
            msg.was_read_by_developer = true;
          })
          break;
        }
      }
      else if (this.state === 'company') {
        if (newChats[i].developer.id === targetId) {
          newChats[i].company_unreads = 0;
          newChats[i].messages.forEach((msg) => {
            msg.was_read_by_company = true;
          })
          break;
        }
      }
    }
    this.chats.next(newChats);
  }

  openNewChat(company: Company, developer: Developer) {
    const newChat: Chat = {
      company,
      developer,
      last_timestamp: new Date(),
      company_unreads: 0,
      developer_unreads: 0,
      messages: []
    }
    const newChats = this.chats.value.slice();
    newChats.unshift(newChat);
    this.chats.next(newChats);
    this.chatExpanded.next(true);
  }
}
