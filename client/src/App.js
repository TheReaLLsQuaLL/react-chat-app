import React, { useState } from "react";
import { StreamChat } from "stream-chat";
import { ChannelList, Chat } from "stream-chat-react";
import Cookies from "universal-cookie";

import {
  ChannelContainer,
  ChannelListContainer,
  Auth,
  TeamChannelList,
} from "./components";

import "./App.css";
import "stream-chat-react/dist/css/index.css";

const cookies = new Cookies();

const apiKey = `hy7x4t93r53t`;
const authToken = cookies.get("token");

const client = StreamChat.getInstance(apiKey);

if (authToken) {
  client.connectUser(
    {
      name: cookies.get(`username`),
      fullName: cookies.get(`fullName`),
      id: cookies.get(`userId`),
      phoneNumber: cookies.get(`phoneNumber`),
      hashedPassword: cookies.get(`hashedPassword`),
      image: cookies.get(`avatarURL`),
    },
    authToken
  );
}

const App = () => {
  const { createType, setCreateType } = useState("");
  const { isCreating, setIsCreating } = useState(false);
  const { isEditing, setIsEditing } = useState(false);

  if (!authToken) return <Auth />;

  return (
    <div>
      <div className="app__wrapper">
        <Chat client={client} theme="team light">
          <ChannelListContainer
            isCreating={isCreating}
            setIsCreating={setIsCreating}
            setCreateType={setCreateType}
            setIsEditing={setIsEditing}
          />
          <ChannelContainer
            isCreating={isCreating}
            setIsCreating={setIsCreating}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            createType={createType}
          />
          <ChannelList
            filters={{}}
            channelRenderFilterFn={() => {}}
            List={(listProps) => <TeamChannelList {...listProps} />}
          />
        </Chat>
      </div>
    </div>
  );
};

export default App;
