import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import { Cookies } from "universal-cookie";

import { ChannelContainer, ChannelListContainer } from "./components";

const apiKey = `hy7x4t93r53t`;

const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div>
      <div className="app__wrapper">
        <Chat client={client} theme="team-light">
          <ChannelListContainer />
          <ChannelContainer />
        </Chat>
      </div>
    </div>
  );
};

export default App;
