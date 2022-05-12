import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Title from "../../shared/components/UI/Title/Title";
import Button from "../../shared/components/UI/Button/Button";
import MessageForm from "../components/MessageForm";
import MessageItem from "../components/MessageItem";

import "./Message.css";

const Message = () => {
  const message_id = useParams();
  const [isForm, setIsForm] = useState(false);
  const [messages, setMessages] = useState([]);

  return (
    <div className="container-fluid">
      <div className="container">
        <Title className="msg_title">Messages</Title>
        <div className="msg_box">
          {messages.map((message) => (
            <MessageItem
              client={message.client}
              name={message.name}
              message={message.message}
              time={message.time}
            />
          ))}
          <MessageItem
            client={true}
            name={"message.name"}
            message={"message.message"}
            time={1234}
          />
          <MessageItem
            client={false}
            name={"message.name"}
            message={"message.message"}
            time={1234}
          />
          <MessageItem
            client={true}
            name={"message.name"}
            message={"message.message"}
            time={1234}
          />
          <MessageItem
            client={false}
            name={"message.name"}
            message={"message.message"}
            time={1234}
          />
          <MessageItem
            client={true}
            name={"message.name"}
            message={"message.message"}
            time={1234}
          />
          <MessageItem
            client={false}
            name={"message.name"}
            message={"message.message"}
            time={1234}
          />
        </div>
        {!isForm && <MessageForm />}
      </div>
    </div>
  );
};

export default Message;
