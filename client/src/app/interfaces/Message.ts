import { defaultDeveloper, Developer } from "./Developer";

export interface Message {
  sender: Developer,
  messageText: string,
  timestamp: Date,
}

export const testMessage: Message = {
  sender: defaultDeveloper,
  messageText: " a message",
  timestamp: new Date,
}