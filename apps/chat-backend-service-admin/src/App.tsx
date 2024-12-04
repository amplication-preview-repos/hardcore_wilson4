import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { MessageList } from "./message/MessageList";
import { MessageCreate } from "./message/MessageCreate";
import { MessageEdit } from "./message/MessageEdit";
import { MessageShow } from "./message/MessageShow";
import { ChatSessionList } from "./chatSession/ChatSessionList";
import { ChatSessionCreate } from "./chatSession/ChatSessionCreate";
import { ChatSessionEdit } from "./chatSession/ChatSessionEdit";
import { ChatSessionShow } from "./chatSession/ChatSessionShow";
import { AiProviderList } from "./aiProvider/AiProviderList";
import { AiProviderCreate } from "./aiProvider/AiProviderCreate";
import { AiProviderEdit } from "./aiProvider/AiProviderEdit";
import { AiProviderShow } from "./aiProvider/AiProviderShow";
import { ChatUserList } from "./chatUser/ChatUserList";
import { ChatUserCreate } from "./chatUser/ChatUserCreate";
import { ChatUserEdit } from "./chatUser/ChatUserEdit";
import { ChatUserShow } from "./chatUser/ChatUserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"ChatBackendService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Message"
          list={MessageList}
          edit={MessageEdit}
          create={MessageCreate}
          show={MessageShow}
        />
        <Resource
          name="ChatSession"
          list={ChatSessionList}
          edit={ChatSessionEdit}
          create={ChatSessionCreate}
          show={ChatSessionShow}
        />
        <Resource
          name="AiProvider"
          list={AiProviderList}
          edit={AiProviderEdit}
          create={AiProviderCreate}
          show={AiProviderShow}
        />
        <Resource
          name="ChatUser"
          list={ChatUserList}
          edit={ChatUserEdit}
          create={ChatUserCreate}
          show={ChatUserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
