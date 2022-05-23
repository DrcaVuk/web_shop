import React from "react";
import { Link } from "react-router-dom";

const MessageItem = props => {
    return(
        <tr className={!props.isRead ? "active" : ""}>
            <td>{props.fullName}</td>
            <td>{props.title}</td>
            <td>{props.message}</td>
            <td><Link to={`/message/${props.id}`}>Read more</Link></td>
        </tr>
    )
}

export default MessageItem;