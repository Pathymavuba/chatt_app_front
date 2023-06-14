import React, { useEffect, useState,useRef } from "react";
import ChatBar from "../../components/ChatBar";
import ChatFooter from "../../components/ChatFooter";
import ChatBody from "../../components/ChatBody";

const ChatPage = ({ socket }) => {
  const [messages,setMessages] =useState([])
  const [typingStatus, setTypingStatus] = useState('');
  const LastMessageRef = useRef()

  useEffect(()=>{

    socket.on("MessageResponse",(data)=>{
        setMessages([...messages,data])
        
    })
  },[messages,socket])

  useEffect(()=>{

    // 👇️ scroll to bottom every time messages change
    LastMessageRef.current?.scrollIntoView({behavior:'smooth'})
  },[messages])

  useEffect(()=>{
    socket.on('typingReponse',(data)=>setTypingStatus(data))
  },[socket])

  return (
    <div className="chat">
      <ChatBar socket={socket} />
      <div className="chat__main">
        <ChatBody  messages={messages} LastMessageRef={LastMessageRef} typingStatus={typingStatus}/>
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

export default ChatPage;
