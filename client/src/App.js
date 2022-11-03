import React from "react";
import { StreamChat } from "stream-chat";
import { ChannelList, Chat } from "stream-chat-react";
import { Cookies } from "universal-cookie";

import {
  ChannelContainer,
  ChannelListContainer,
  TeamChannelList,
} from "./components";

import "./App.css";

const apiKey = `hy7x4t93r53t`;

const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div>
      <div className="app__wrapper">
        <Chat client={client} theme="team-light">
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
