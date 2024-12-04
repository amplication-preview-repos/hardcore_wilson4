import { ChatSessionWhereUniqueInput } from "../chatSession/ChatSessionWhereUniqueInput";

export type MessageCreateInput = {
  chatSession?: ChatSessionWhereUniqueInput | null;
  content?: string | null;
  timestamp?: Date | null;
};
