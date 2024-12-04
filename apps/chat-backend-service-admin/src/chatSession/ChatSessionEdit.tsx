import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { MessageTitle } from "../message/MessageTitle";

export const ChatSessionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="ChatUser" source="chatUser" />
        <DateTimeInput label="endedAt" source="endedAt" />
        <ReferenceArrayInput source="messages" reference="Message">
          <SelectArrayInput
            optionText={MessageTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <DateTimeInput label="startedAt" source="startedAt" />
      </SimpleForm>
    </Edit>
  );
};
