import { Message } from "./Message";
import { defaultDeveloper, Developer } from "./Developer";
import { Company, defaultCompany } from "./Company";


export interface Chat {
  company: Company,
  developer: Developer,
  last_timestamp: Date,
  company_unreads: boolean,
  developer_unreads: boolean,
  messages: Message[],
}

export const defaultChat: Chat = {
  company: defaultCompany,
  developer: defaultDeveloper,
  last_timestamp: new Date,
  company_unreads: false,
  developer_unreads: false,
  messages: []
}
