import { MessageCreateNestedManyWithoutChatSessionsInput } from "./MessageCreateNestedManyWithoutChatSessionsInput";

export type ChatSessionCreateInput = {
  chatUser?: string | null;
  endedAt?: Date | null;
  messages?: MessageCreateNestedManyWithoutChatSessionsInput;
  startedAt?: Date | null;
};
