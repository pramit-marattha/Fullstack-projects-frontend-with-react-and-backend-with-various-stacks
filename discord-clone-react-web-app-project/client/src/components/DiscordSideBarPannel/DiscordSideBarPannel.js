import React, {useEffect, useState} from "react";
import SidebarChannel from "../DiscordSidebarChannel";

import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";
import MicOffIcon from '@material-ui/icons/MicOff';
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";
import FaceIcon from '@material-ui/icons/Face';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import AirlineSeatReclineExtraIcon from '@material-ui/icons/AirlineSeatReclineExtra';
import BlurCircularIcon from '@material-ui/icons/BlurCircular';

import {useSelector} from "react-redux";
import {selectUser} from "../../features/userSlice";
import {auth} from "../../firebase/firebase";

import {Avatar} from "@material-ui/core";


import axios from "../../axios/axios";
import Pusher from "pusher-js";

import "./DiscordSideBarPannel.css";

const pusher = new Pusher("e9b648b422d2fcf0a24f", {
  cluster: "ap2",
});

function DiscordSideBarPannel() {
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);

  const getChannels = () => {
    axios.get("/get/channelList").then((res) => {
      setChannels(res.data);
    });
  };

  useEffect(() => {
    getChannels();
    const channel = pusher.subscribe("channels");
    channel.bind("newChannel", function (data) {
      getChannels();
    });
  }, []);

  const handleAddChannel = (e) => {
    e.preventDefault();

    const channelName = prompt("Enter a new channel name");

    if (channelName) {
      axios.post("/new/channel", {
        channelName,
      });
    }
  };
  return (
    <div className="wrapper">
{/* -------------- */}
  <div className="panel__side">
    <div className="channel nativecolor">
      <div className="channel__content">
        <i className="icon__user"><AccountCircleIcon style={{ fontSize: 60 }}/></i>
      </div>
    </div>
    <div className="dottedLine"></div>
    <div className="channel nativecolor9">
      <div className="channel__content">
        <i><SupervisedUserCircleIcon style={{ fontSize: 60 }}/></i>
      </div>
    </div>
    <div className="channel nativecolor2">
      <div className="channel__content">
        <i><PeopleIcon style={{ fontSize: 60 }}/></i>
      </div>
    </div>
    <div className="channel nativecolor3">
      <div className="channel__content">
        <i><AssignmentIndIcon style={{ fontSize: 60 }}/></i>
      </div>
    </div>
    <div className="channel nativecolor4">
      <div className="channel__content">
        <i><RecordVoiceOverIcon style={{ fontSize: 60 }}/></i>
      </div>
    </div>
    <div className="channel nativecolor5">
      <div className="channel__content">
        <i><FaceIcon style={{ fontSize: 60 }}/></i>
      </div>
    </div>
    <div className="channel nativecolor6">
      <div className="channel__content">
        <i><AccessibilityIcon style={{ fontSize: 60 }}/></i>
      </div>
    </div>
    <div className="channel nativecolor7">
      {/* <div className="channel__content"> */}
        <i><AccessibilityNewIcon style={{ fontSize: 60 }}/></i>
      {/* </div> */}
    </div>
    <div className="channel nativecolor8">
      {/* <div className="channel__content"> */}
        <i><AirlineSeatReclineExtraIcon style={{ fontSize: 60 }}/></i>
      {/* </div> */}
    </div>
    <div className="channel nativecolor">
      {/* <div className="channel__content"> */}
        <i><BlurCircularIcon style={{ fontSize: 60 }}/></i>
      {/* </div> */}
    </div>
    
  </div>
  
 {/* ------------------- */}
    <div className="sidebar">
    
      <div className="sidebar__top">
        <h3>डिसकोर्ड क्लोन</h3>

        <div className="logout__button" onClick={() => auth.signOut()}>Logout</div>

      </div>

      <div className="sidebar_channels">
        <div className="sidebar_channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>Channels List</h4>
          </div>
          <AddIcon onClick={handleAddChannel} className="sidebar_addChannel" />
        </div>

        <div className="sidebar__channelsList">
          {channels.map((channel) => (
            <SidebarChannel
              key={channel.id}
              id={channel.id}
              channelName={channel.name}
            />
          ))}
        </div>
      </div>

      <div className="sidebar__voice">
        <SignalCellularAltIcon
          className="sidebar__voiceIcon"
          fontSize="large"
        />
        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>

        <div className="sidebar__voiceIcons">
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>

      <div className="sidebar__profile">
        <Avatar src={user.photo} />
        <div className="sidebar__profileInfo">
          <h3>{user.displayName}</h3>
          <p>#{user.uid.substring(0, 4)}</p>
        </div>

        <div className="sidebar__profileIcons">
          <MicOffIcon style={{color:"red"}} />
          <HeadsetIcon style={{color:"purple"}} />
          <SettingsIcon style={{color:"silver"}}/>
        </div>
      </div>
      </div>
    </div>
  );
}

export default DiscordSideBarPannel;
