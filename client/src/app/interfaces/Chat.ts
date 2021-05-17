import { Message } from "./Message";
import { defaultDeveloper, Developer } from "./Developer";
import { Company } from "./company";


export interface Chat {
  company: Company,
  developer: Developer,
  last_timestamp: Date,
  messages: Message[],
}

// export const defaultChat: Chat = {
//   sender: defaultDeveloper,
//   date: new Date,
//   lastMessageTime: new Date,
//   messages: [testMessage]

// }