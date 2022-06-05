import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHttpClient } from "../../../shared/hooks/http-hook";

import Title from "../../../shared/components/UI/Title/Title";

import "./Message.css";

const Message = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const { message_id } = useParams();
  const [ message, setMessage ] = useState([]);

  useEffect(() => {
    const fetchMessage = async () => {
      let msg;
      try {
        msg = await sendRequest(`/contact/${message_id}`, "GET");
        setMessage(msg.data.message)
        console.log(msg.data.message)
      } catch(err) {
        console.log(err);
      }
    }
    fetchMessage();
  },[])
  return (
    <div className="container-fluid">
      <div className="container">
        <Title className="msg_title">Messages</Title>
          <h2>Name: {message.title}</h2>     
          <p>Message: {message.message}</p>
          <p>Email: {message.email}</p>
          <p>Full name: {message.fullName}</p> 
      </div>
    </div>
  );
};

export default Message;
