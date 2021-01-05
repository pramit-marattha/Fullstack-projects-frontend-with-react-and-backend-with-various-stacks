import React from "react";
import {useDispatch} from "react-redux";
import {setChannelInfo} from "../../features/appSlice";
import AppsIcon from "@material-ui/icons/Apps";

import "./DiscordSidebarChannel.css";

function DiscordSidebarChannel({id, channelName}) {
  const dispatch = useDispatch();

  return (
    <div
      className="sidebarChannel"
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName,
          })
        )
      }
    >
      <h4>
        <span className="sidebarChannel__hash">
          <AppsIcon style={{color: "#738adb"}} />
        </span>
        {channelName}
      </h4>
    </div>
  );
}

export default DiscordSidebarChannel;
