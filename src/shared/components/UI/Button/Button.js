import React from "react";

import "./Button.css";

const Button = (props) => {
  return (
    <div className={`button-box ${props.className}`}>
      <button type={props.type} onClick={props.onClick} >{props.children}</button>
    </div>
  );
};

export default Button;
