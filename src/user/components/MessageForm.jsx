import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

import Button from "../../shared/components/UI/Button/Button";

import classed from "./MessageForm.module.css";

const MessageForm = (props) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      message: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    },
  });
  return (
      <form onSubmit={formik.handleSubmit} className={classed.form}>
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            className={
              formik.errors.title && formik.touched.title ? "input-error" : ""
            }
          />
          {formik.errors.title && formik.touched && (
            <p>{formik.errors.title}</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="message">Message</label>
          <textarea
            rows="5"
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className={formik.errors.message && formik.touched.message ? "input-error":""}
          ></textarea>
          {formik.errors.message && formik.touched.message && (<p>{formik.errors.message}</p>)}
        </div>
        <div className="form-control">
          <Button type="submit">Send</Button>
        </div>
      </form>
  );
};

export default MessageForm;
