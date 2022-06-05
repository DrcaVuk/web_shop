import React from "react";

import './Description.css';

const Description = props => {
    return(
        <p className={`description ${props.className}`}>{props.children}</p>
    )
}

export default Description;