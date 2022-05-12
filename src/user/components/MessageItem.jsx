import React from "react";

import "./MessageItem.css";

const MessageItem = (props) => {
  return (
    <div className="message-box">
      <div className={props.client ? "message-client" : "message"}>
        <h5>{props.name}</h5>
        <p className="mess">{props.message}</p>
        <p className="time">{props.time}</p>
      </div>
    </div>
  );
};

export default MessageItem;
