
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from 'socket.io-client';

import { Chat } from '../interfaces/Chat';
import { Message } from '../interfaces/Message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  socket?: any;
  
  chats = new BehaviorSubject<Chat[]>([]);
  
  constructor() { }

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
      console.log(chatHistory)
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
      isNewChat ? newChats.push(chat) : false;
      newChats.sort((a,b) => Number(a.last_timestamp) - Number(b.last_timestamp))
      this.chats.next(newChats);
    });
  }

  sendMessage( message: string, targetId: string) {
    console.log(message, targetId)
    this.socket.emit('client-message', { message, targetId });
  }


}
