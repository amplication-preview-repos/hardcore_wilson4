import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CHATSESSION_TITLE_FIELD } from "./ChatSessionTitle";

export const ChatSessionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ChatUser" source="chatUser" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="endedAt" source="endedAt" />
        <TextField label="ID" source="id" />
        <TextField label="startedAt" source="startedAt" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Message"
          target="chatSessionId"
          label="Messages"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="ChatSession"
              source="chatsession.id"
              reference="ChatSession"
            >
              <TextField source={CHATSESSION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="timestamp" source="timestamp" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
