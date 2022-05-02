import React, { useState, useEffect } from "react";

import ImageUpload from "./ImageU";
const ImageList = (props) => {
  const [images, setImage] = useState();

  useEffect(() => {
    setImage(props.images);
  }, [props.images]);
  console.log(props.images)
  return (
    <div className="container">
      {images && images.map((i, index) => (<ImageU id={index} file={i} />))}
    </div>
  );
};
export default ImageList;
