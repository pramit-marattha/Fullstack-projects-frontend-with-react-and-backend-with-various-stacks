import React from "react";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";
import ChatIcon from "@material-ui/icons/Chat";

import "./DiscordChatTopHeader.css";

function DiscordChatTopHeader({channelName}) {
  return (
    <div className="chatHeader">
      <div className="chatHeaderLeft">
        <h3>
          <span className="chatHeader__msg">
            <ChatIcon style={{color: "#7289DA"}} />
          </span>
          {channelName}
        </h3>
      </div>
      <div className="chatHeader__search">
        <a href="https://support.discord.com/hc/en-us" target="_blank" rel="noreferrer"><HelpRoundedIcon /></a>
      </div>
    </div>
  );
}

export default DiscordChatTopHeader;
