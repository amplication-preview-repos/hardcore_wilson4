import { ChatSession as TChatSession } from "../api/chatSession/ChatSession";

export const CHATSESSION_TITLE_FIELD = "chatUser";

export const ChatSessionTitle = (record: TChatSession): string => {
  return record.chatUser?.toString() || String(record.id);
};
