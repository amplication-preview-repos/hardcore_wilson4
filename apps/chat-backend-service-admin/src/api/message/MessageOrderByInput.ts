import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  chatSessionId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
