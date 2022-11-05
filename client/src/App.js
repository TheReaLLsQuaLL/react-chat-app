import React from "react";
import { StreamChat } from "stream-chat";
import { ChannelList, Chat } from "stream-chat-react";
import Cookies from "universal-cookie";

import {
  ChannelContainer,
  ChannelListContainer,
  TeamChannelList,
  Auth,
} from "./components";

import "./App.css";

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
  if (!authToken) return <Auth />;

  return (
    <div>
      <div className="app__wrapper">
        <Chat client={client} theme="team light">
          <ChannelListContainer />
          <ChannelContainer />
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
