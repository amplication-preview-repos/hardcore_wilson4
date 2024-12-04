import { SortOrder } from "../../util/SortOrder";

export type ChatSessionOrderByInput = {
  chatUser?: SortOrder;
  createdAt?: SortOrder;
  endedAt?: SortOrder;
  id?: SortOrder;
  startedAt?: SortOrder;
  updatedAt?: SortOrder;
};
