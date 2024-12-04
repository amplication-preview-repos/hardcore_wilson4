import { ChatUserWhereInput } from "./ChatUserWhereInput";
import { ChatUserOrderByInput } from "./ChatUserOrderByInput";

export type ChatUserFindManyArgs = {
  where?: ChatUserWhereInput;
  orderBy?: Array<ChatUserOrderByInput>;
  skip?: number;
  take?: number;
};
