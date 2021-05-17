import { Message, testMessage } from "./Message";
import { defaultDeveloper, Developer } from "./Developer";


export interface Chat {
  sender: Developer,
  date: Date,
  lastMessageTime: Date,
  messages: Message[],
}

export const defaultChat: Chat = {
  sender: defaultDeveloper,
  date: new Date,
  lastMessageTime: new Date,
  messages: [testMessage]

}