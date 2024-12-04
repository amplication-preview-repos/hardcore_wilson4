import { Message } from "../message/Message";

export type ChatSession = {
  chatUser: string | null;
  createdAt: Date;
  endedAt: Date | null;
  id: string;
  messages?: Array<Message>;
  startedAt: Date | null;
  updatedAt: Date;
};
