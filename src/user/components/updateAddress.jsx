import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

import Button from "../../shared/components/UI/Button/Button";
import Title from "../../shared/components/UI/Title/Title";

const UpdateAddress = (props) => {
  const formik = useFormik({
    initialValues: {
      address: props.data.address ? props.data.address : "",
      city: props.data.city ? props.data.city : "",
      zipCode: props.data.zipCode ? props.data.zipCode : "",
    },
    validationSchema: Yup.object({
      address: Yup.string().required("Address is required"),
      city: Yup.string().required("City is required"),
      zipCode: Yup.string().required("Zip code is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    },
  });
  return (
    <div className="modal">
      <Title>Update address</Title>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
            className={
              formik.errors.address && formik.touched.address
                ? "input-error"
                : ""
            }
          />
          {formik.errors.address && formik.touched.address && (
            <p>{formik.errors.address}</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            name="city"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
            className={
              formik.errors.city && formik.touched.city ? "input-error" : ""
            }
          />
          {formik.errors.city && formik.touched.city && (
            <p>{formik.errors.city}</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="zipCode">Zip code:</label>
          <input
            type="text"
            name="zipCode"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.zipCode}
            className={
              formik.errors.zipCode && formik.touched.zipCode
                ? "input-error"
                : ""
            }
          />
          {formik.errors.zipCode && formik.touched.zipCode && (
            <p>{formik.errors.zipCode}</p>
          )}
        </div>
        <div className={`form-group`}>
          <Button type="submit">Save</Button>
          <Button onClick={props.cancel} type="button">
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateAddress;
