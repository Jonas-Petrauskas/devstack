import { TaggedItem } from "./TaggedItem";

export interface Country extends TaggedItem {
  name: string,
  is_european_union: boolean
}
