import { Message, testMessage } from "./Message";
import { defaultUser, User } from "./User";


export interface Chat {
  sender: User,
  date: Date,
  lastMessageTime: Date,
  messages: Message[],
}

export const defaultChat: Chat = {
  sender: defaultUser,
  date: new Date,
  lastMessageTime: new Date,
  messages: [testMessage]

}