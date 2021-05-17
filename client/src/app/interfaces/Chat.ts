import { Message } from "./Message";
import { defaultDeveloper, Developer } from "./Developer";
import { Company, defaultCompany } from "./Company";


export interface Chat {
  company: Company,
  developer: Developer,
  last_timestamp: Date,
  messages: Message[],
}

export const defaultChat: Chat = {
  company: defaultCompany,
  developer: defaultDeveloper,
  last_timestamp: new Date,
  messages: []

}