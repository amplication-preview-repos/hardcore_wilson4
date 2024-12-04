import { ChatSessionWhereUniqueInput } from "../chatSession/ChatSessionWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MessageWhereInput = {
  chatSession?: ChatSessionWhereUniqueInput;
  content?: StringNullableFilter;
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
};
