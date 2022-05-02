import React, { useState, useEffect } from "react";

const ImageU = (props) => {
  const [previewUrl, setPreviewUrl] = useState();
  useEffect(() => {
    if (!props.file) return;

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.file);
    };
    fileReader.readAsDataURL(props.file);
  }, [props.file]);

  return <div key={props.id}>{previewUrl && <img src={previewUrl} />}</div>;
};

export default ImageU;
