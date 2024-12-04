import { ChatSession } from "../chatSession/ChatSession";

export type Message = {
  chatSession?: ChatSession | null;
  content: string | null;
  createdAt: Date;
  id: string;
  timestamp: Date | null;
  updatedAt: Date;
};
