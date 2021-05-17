import { defaultUser, User } from "./User";

export interface Message {
  sender: User,
  messageText: string,
  timestamp: Date,
}

export const testMessage: Message = {
  sender: defaultUser,
  messageText: " a message",
  timestamp: new Date,
}