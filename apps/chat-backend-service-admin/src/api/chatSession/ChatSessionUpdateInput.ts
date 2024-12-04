import { MessageUpdateManyWithoutChatSessionsInput } from "./MessageUpdateManyWithoutChatSessionsInput";

export type ChatSessionUpdateInput = {
  chatUser?: string | null;
  endedAt?: Date | null;
  messages?: MessageUpdateManyWithoutChatSessionsInput;
  startedAt?: Date | null;
};
