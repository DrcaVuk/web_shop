import React from "react";

import "./ImageBox.css";

const ImageBox = props => {
    return(
        <div className="image-box">
            <img src={props.image} />
            <div className="box"></div>
        </div>
    )
}

export default ImageBox;