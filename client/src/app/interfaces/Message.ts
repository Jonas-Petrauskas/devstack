import { defaultDeveloper, Developer } from "./Developer";

export interface Message {
  company_id: string,
  developer_id: string,
  timestamp: Date,
  message: string,
  is_from_developer: boolean
}

export const defaultMessage: Message = {
  company_id: '',
  developer_id: '',
  timestamp: new Date(0),
  message: '',
  is_from_developer: false,
}
