import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../../../shared/components/UI/Button/Button";
import UploadFile from "../../../shared/components/UploadFile/UpladFile";

import classed from "./PostForm.module.css";

const PostForm = (props) => {
  const formik = useFormik({
    initialValues: {
      title: props.title ? props.title : "",
      description: props.description ? props.description : "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required!"),
      description: Yup.string().required("Description is required!"),
    }),
    onSubmit: (values) => {
      props.handlerPost(values);
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
      <div className="row">
        <div className={`col-50 ${classed.colRight}`}>
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
        <div className={`col-50 ${classed.colLeft}`}>
          <UploadFile
            imagesSer={props.imagesSer}
            handlerImageDelite={props.handlerImageDelite}
            images={props.images}
            setImages={props.setImages}
          />
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
