import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { ChatSessionTitle } from "../chatSession/ChatSessionTitle";

export const MessageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="chatSession.id"
          reference="ChatSession"
          label="ChatSession"
        >
          <SelectInput optionText={ChatSessionTitle} />
        </ReferenceInput>
        <TextInput label="content" multiline source="content" />
        <DateTimeInput label="timestamp" source="timestamp" />
      </SimpleForm>
    </Create>
  );
};
