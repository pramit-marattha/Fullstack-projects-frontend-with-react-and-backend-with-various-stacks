import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import ChatHeader from "../DiscordChatTopHeader";
import Message from "../DiscordMessages";
import {selectUser} from "../../features/userSlice";
import {selectChannelId, selectChannelName} from "../../features/appSlice";

import AddBoxIcon from '@material-ui/icons/AddBox';
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import axios from "../../axios/axios";
import Pusher from "pusher-js";

import "./DiscordChatMessage.css";

const pusher = new Pusher("e9b648b422d2fcf0a24f", {
  cluster: "ap2",
});

function DiscordChatMessage() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);


  const getConversation = (channelId) => {
    if (channelId) {
      axios.get(`/get/conversation?id=${channelId}`).then((res) => {
        setMessages(res.data[0].conversation);
      });
    }
  };

  useEffect(() => {
    getConversation(channelId);
    const channel = pusher.subscribe("conversation");
    channel.bind("newMessage", function (data) {
      getConversation(channelId);
      // alert(JSON.stringify(data));
    });
  }, [channelId]);

  const sendMessage = (e) => {
    e.preventDefault();

    axios.post(`/new/message?id=${channelId}`, {
      message: input,
      timestamp: Date.now(),
      user: user,
    });

    setInput("");
  };
  return (
    
    <div className="chat">
      <ChatHeader channelName={channelName} />

      <div className="chat__messages">
        {messages.map((message) => (
          <Message
            timestamp={message.timestamp}
            message={message.message}
            user={message.user}
          />
        ))}
      </div>


      <div className="chat__input">
        <AddBoxIcon fontSize="large" />
        <form>
          <input
            value={input}
            disabled={!channelId}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message @ ${channelName}`}
          />
          <button
            className="chat__inputButton"
            type="submit"
            onClick={sendMessage}
          >
            Send Message
          </button>
        </form>
        <div>
    </div>

        <div className="chat__inputIcons">
          <EmojiEmotionsIcon fontSize="large" />
          
        </div>
      </div>
    </div>
  );
}

export default DiscordChatMessage;
