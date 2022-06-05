import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FaCloudUploadAlt } from "react-icons/fa";
import { ServerLink } from "../../../constants";

const UploadFile = (props) => {
  const [viewImage, setViewImage] = useState([]);

  useEffect(() => {
    let image = [];
    if (props.imagesSer && props.imagesSer.length > 0) {
      for (let i in props.imagesSer) {
        image.push(
          <div key={i} className="image">
            <button
              type="button"
              onClick={() => {
                props.handlerImageDelite({ image_name:props.imagesSer[i] });
              }}
            >
              {" "}
              <AiOutlineDelete />
            </button>
            <img src={`${ServerLink}/${props.imagesSer[i]}`} />
          </div>
        );
      }
    }

    for (let i = 0; i < props.images.length; i++) {
      image.push(
        <div key={i} className="image">
          <button
            type="button"
            onClick={() => {
              handlerImageDelete(props.images[i].name);
            }}
          >
            <AiOutlineDelete />
          </button>
          <img src={URL.createObjectURL(props.images[i])} />
        </div>
      );
    }
    setViewImage(image);
  }, [props.images]);

  const handlerAddImage = (values) => {
    let image = [...values];
    for (let i = 0; i < props.images.length; i++) {
      image.push(props.images[i]);
    }
    props.setImages(image);
  };

  const handlerImageDelete = (name) => {
    let image = [];
    for (let i = 0; i < props.images.length; i++) {
      if (props.images[i].name !== name) {
        image.push(props.images[i]);
      }
    }
    props.setImages(image);
  };

  return (
    <div className="upload-images">
      <div className="box-image">{viewImage}</div>
      <div className="form-control">
        <label className="btn-file">
          <input
            className="input-error"
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={(event) => {
              handlerAddImage(event.currentTarget.files);
            }}
            multiple
          />
          <FaCloudUploadAlt />
        </label>
      </div>
    </div>
  );
};

export default UploadFile;
