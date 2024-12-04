import { ChatUser as TChatUser } from "../api/chatUser/ChatUser";

export const CHATUSER_TITLE_FIELD = "id";

export const ChatUserTitle = (record: TChatUser): string => {
  return record.id?.toString() || String(record.id);
};
