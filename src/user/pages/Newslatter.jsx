import Reac, { useState, useEffect } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../../shared/components/UI/Button/Button";
import Title from "../../shared/components/UI/Title/Title";

const Newslatter = () => {
  const navigate = useNavigate();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [date, setDate] = useState();
  const formik = useFormik({
    initialValues: {
      title: "",
      message: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      const handlerMessage = async () => {
        try {
          sendRequest("/newslatter/send", "POST", values);
        } catch (err) {
          console.log(err);
        }
      };
      handlerMessage()
      formik.resetForm();
    },
  });
  return (
    <div className="container-fluid">
      <div className="container">
        <Title>Create newslatter</Title>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-control">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              placholden="Enter title"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
              className={
                formik.errors.title && formik.touched.title ? "input-error" : ""
              }
            />
            {formik.errors.title && formik.touched.title && (
              <p>{formik.errors.title}</p>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              rows="5"
              onChange={formik.handleChange}
              onBlur={formik.onBlur}
              value={formik.values.message}
              className={
                formik.errors.message && formik.touched.message
                  ? "input-error"
                  : ""
              }
            ></textarea>
            {formik.errors.message && formik.touched.message && (
              <p>{formik.errors.message}</p>
            )}
          </div>
          <div className="form-control">
            <Button type="submit">Send</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newslatter;
