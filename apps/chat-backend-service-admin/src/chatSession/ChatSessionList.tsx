import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ChatSessionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ChatSessions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="ChatUser" source="chatUser" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="endedAt" source="endedAt" />
        <TextField label="ID" source="id" />
        <TextField label="startedAt" source="startedAt" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
