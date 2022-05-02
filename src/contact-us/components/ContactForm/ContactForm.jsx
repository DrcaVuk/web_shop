import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useHttpClient } from "../../../shared/hooks/http-hook";
import Button from "../../../shared/components/UI/Button/Button";

import classed from "./ContactForm.module.css";

const ContactForm = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      title: "",
      message: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Enter your name"),
      email: Yup.string().required("Enter your email address"),
      title: Yup.string().required("Plase enter title"),
      message: Yup.string().required("Plase enter your message"),
    }),
    onSubmit: (values) => {
        sendRequest("/contact", "POST", values);
        formik.resetForm();
      },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-control">
        <label htmlFor="fullName">Your name:</label>
        <input
          type="text"
          name="fullName"
          placeholder="Enter your name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fullName}
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
      </div>
      <div className="form-control">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />
      </div>
      <div className="form-control">
        <label htmlFor="message">Message:</label>
        <textarea
          rows="5"
          name="message"
          placeholder="Enter message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        ></textarea>
      </div>
      <div className="form-control">
        <Button type="submit" className={classed.button}>
          Send
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
