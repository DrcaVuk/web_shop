import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

const Button = (props) => {
  if(props.type === "button") {
    return (
      <div className={`button-box ${props.className}`}>
        <button type={props.type} onClick={props.onClick} >{props.children}</button>
      </div>
    );
  } else if (props.type === "submit") {
    return (
      <div className={`button-box ${props.className}`}>
        <button type={props.type} >{props.children}</button>
      </div>
    )
  } else {
    return (
      <div className={`button-box ${props.className}`}>
        <Link to={`${props.to}`} >{props.children}</Link>
      </div>
    )
  }
    
};

export default Button;
