import React from "react";
import ChatBar from "../../components/ChatBar";
import ChatFooter from "../../components/ChatFooter";
import ChatBody from "../../components/ChatBody";

const ChatPage = ({ socket }) => {
  return (
    <div className="chat">
      <ChatBar />
      <div className="chat__main">
        <ChatBody />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

export default ChatPage;
