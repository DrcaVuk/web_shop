import React from "react";
import { Slide } from "react-slideshow-image";
import { ServerLink } from "../../../constants";
import ImageBox from "../UI/ImageBox/ImageBox";
import noImg from "../../images/noImg.jpg";

import "./ImageView.css";

const ImageView = (props) => {
  console.log(props.images.length);
  if (props.images.length > 1) {
    return (
      <div className="image">
        <Slide easing="ease">
          {props.images.map((image, index) => (
            <ImageBox key={index} image={`${ServerLink}/${image}`} />
          ))}
        </Slide>
      </div>
    );
  } else if (props.images.length === 1) {
    return (
      <div className="image">
        <img src={`${ServerLink}/${props.images[0]}`} />
      </div>
    );
  } else {
    return (
      <div className="image">
        <img src={noImg} alt="No image" />
      </div>
    );
  }
};

export default ImageView;
