import { defaultDeveloper, Developer } from "./Developer";

export interface Message {
  company_id: string,
  developer_id: string,
  timestamp: Date,
  message: string,
  is_from_developer: boolean
}
