import React, { useEffect, useState } from "react";
import ChatBar from "../../components/ChatBar";
import ChatFooter from "../../components/ChatFooter";
import ChatBody from "../../components/ChatBody";

const ChatPage = ({ socket }) => {
  const [messages,setMessages] =useState([])

  useEffect(()=>{

    socket.on("MessageResponse",(data)=>{
        setMessages([...messages,data])
    })
  },[messages,socket])
  return (
    <div className="chat">
      <ChatBar />
      <div className="chat__main">
        <ChatBody  messages={messages}/>
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

export default ChatPage;
