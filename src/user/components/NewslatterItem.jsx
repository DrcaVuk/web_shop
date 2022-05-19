import React from "react";

const NewslatterItem = props => {
    return(
        <tr>
            <td>{props.email}</td>
            <td>{props.isActive ? "Yes" : "No"}</td>
            <td><button type="button" onClick={() => props.handlerDelete(props.id)}>Delete</button></td>
        </tr>
    )
};

export default NewslatterItem;