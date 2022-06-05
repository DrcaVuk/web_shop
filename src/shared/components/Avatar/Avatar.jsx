import React, { useState, useEffect } from "react";
import { useHttpClient } from "../../hooks/http-hook";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineUpload } from "react-icons/ai";
import { ServerLink } from "../../../constants";
import noImage from "../../images/noImg.jpg";

import "./Avatar.css";

const Avatar = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [previewUrl, setPreviewUrl] = useState();
  const formik = useFormik({
    initialValues: {
      image: null,
    },
    validationSchema: Yup.object({
      image: Yup.mixed().required("Please select image"),
    }),
  });

  useEffect(() => {
    if (props.image) {
      setPreviewUrl(`${ServerLink}/${props.image}`);
    }
    if (formik.values.image) {
      const handlerImage = async () => {
        const formData = new FormData();
        formData.append("image", formik.values.image);
        try {
          await sendRequest("/user/image", "PUT", formData);
        } catch (err) {
          console.log(err);
        }

        const fileReader = new FileReader();
        fileReader.onload = () => {
          setPreviewUrl(fileReader.result);
        };
        fileReader.readAsDataURL(formik.values.image);
      };
      handlerImage();
    }
  }, [formik.values.image, props.image]);

  return (
    <div className="avatar">
      <img src={props.image ? previewUrl : noImage} alt={props.image} />
      <div className="upload">
        <form onSubmit={formik.handleSubmit}>
          <label className="btn-file">
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={(event) => {
                formik.setFieldValue("image", event.currentTarget.files[0]);
              }}
            ></input>
            <AiOutlineUpload />
          </label>
        </form>
      </div>
    </div>
  );
};

export default Avatar;
