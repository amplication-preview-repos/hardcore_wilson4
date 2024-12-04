import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";

export type ChatSessionWhereInput = {
  chatUser?: StringNullableFilter;
  endedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  messages?: MessageListRelationFilter;
  startedAt?: DateTimeNullableFilter;
};
