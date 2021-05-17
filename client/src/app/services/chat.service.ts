
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

    this.socket.on('message-history', (messageHistory: Message[]) => {
      messageHistory.sort((a, b) => Number(a.timestamp) - Number(b.timestamp))
        // .forEach( (message) => {
        //   if (this.chats.contains())
        // })
    });

    this.socket.on('server-message', (message: Message) => {

    });
  }

  sendMessage( message: string, targetId: string) {
    this.socket.emit('client-message', { message, targetId });
  }


}
