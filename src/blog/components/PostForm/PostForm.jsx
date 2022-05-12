import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaCloudUploadAlt } from "react-icons/fa";

import Button from "../../../shared/components/UI/Button/Button";

const PostForm = (props) => {
  const [previewUrl, setPreviewUrl] = useState();
  const [viewImage, setViewImage] = useState("");
  const [ images, setImages ] = useState([])
  const formik = useFormik({
    initialValues: {
      title: props.title ? props.title : "",
      description: props.description ? props.description : "",
      image: null,
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required!"),
      description: Yup.string().required("Description is required!"),
      image: Yup.mixed().required("Please select image!"),
    }),
    onSubmit: (values) => {
      props.handlerPost(values);
      console.log(values);
      formik.resetForm();
    },
  });

  useEffect(() => {
    if (!formik.values.image) return;

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(formik.values.image);

  }, [formik.values.image]);

  return (
    <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
      <div className="row">
        <div className="col-50">
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
            />
            {formik.touched.title && formik.errors.title && (
              <p>{formik.errors.title}</p>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="form-control">Description</label>
            <textarea
              rows={5}
              name="description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
            />
            {formik.touched.description && formik.errors.description && (
              <p>{formik.errors.description}</p>
            )}
          </div>
        </div>
        <div className="col-50">
          <div className="box-image">
            {previewUrl && <img src={previewUrl}/>}
          </div>
          <div className="form-control">
            <label className="btn-file">
              <input className="input-error"
                type="file"
                id="image"
                name="image"
                accept='image/*'
                onChange={(event) => {
                  formik.setFieldValue("image", event.currentTarget.files[0]);
                }}
              />
              <FaCloudUploadAlt />
            </label>
          </div>
        </div>
      </div>
      <div className="form-control">
        <Button disabled={!formik.errors} type="submit">
          Save
        </Button>
      </div>
    </form>
  );
};

export default PostForm;
