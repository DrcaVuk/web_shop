import React, { useState, useEffect } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";
import Title from "../../shared/components/UI/Title/Title";
import Button from "../../shared/components/UI/Button/Button";
import LoadingSpinner from "../../shared/components/UI/LoadingSpinner/LoadingSpinner";
import MessageItem from "../components/MessageItem";

const Messages = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const fetchMessage = async () => {
      let messagesData;
      try {
        messagesData = await sendRequest(`/contact/${limit}/${page}`, "GET");
        setMessages(messagesData.data.messages.docs);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMessage();
  }, []);
  return (
    <div className="container-fluid">
      <div className="container">
        <Title>Messages</Title>
        <div className="message-list">
          {isLoading && <LoadingSpinner />}
          {!isLoading && (
            <div className="messages_list">
              <table id="table">
                <tr>
                  <th>Name</th>
                  <th>Title</th>
                  <th>Message</th>
                  <th></th>
                </tr>
                {messages.map((message, index) => (
                  <MessageItem
                    key={index}
                    id={message._id}
                    fullName={message.fullName}
                    message={message.message}
                    title={message.title}
                    isRead={message.isRead}
                  />
                ))}
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
