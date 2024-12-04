import { ChatSessionWhereUniqueInput } from "../chatSession/ChatSessionWhereUniqueInput";

export type MessageUpdateInput = {
  chatSession?: ChatSessionWhereUniqueInput | null;
  content?: string | null;
  timestamp?: Date | null;
};
