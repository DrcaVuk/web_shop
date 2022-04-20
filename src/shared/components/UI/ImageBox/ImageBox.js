import React from "react";

import "./ImageBox.css";

const ImageBox = (props) => {
  return (
    <div className={`image-box ${props.className}`}>
      <img src={props.image} />
      {props.children}
    </div>
  );
};

export default ImageBox;
