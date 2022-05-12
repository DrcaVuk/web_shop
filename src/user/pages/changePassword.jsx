import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Title from "../../shared/components/UI/Title/Title";
import Button from "../../shared/components/UI/Button/Button";

const ChangePassword = () => {
  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      oldPassword: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      newPassword: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      confirmPassword: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .oneOf([Yup.ref('newPassword')],'Passwords do not match')
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    },
  });
  return (
    <div className="container-fluid">
      <div className="container">
        <Title>Change password</Title>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-control">
            <label htmlFor="oldPassword">Old Password:</label>
            <input
              type="password"
              name="oldPassword"
              placeholder="Enter old password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.oldPassword}
              className={
                formik.errors.oldPassword && formik.touched.oldPassword
                  ? "input-error"
                  : ""
              }
            />
            {formik.errors.oldPassword && formik.touched.oldPassword && (
              <p>{formik.errors.oldPassword}</p>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="newPassword">New password:</label>
            <input
              type="password"
              name="newPassword"
              placeholder="Enter new password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.newPassword}
              className={formik.errors.newPassword && formik.touched.newPassword ? "input-error":""}
            />
            {formik.errors.newPassword && formik.touched.newPassword && (<p>{formik.errors.newPassword}</p>)}
          </div>
          <div className="form-control">
            <label htmlFor="confirmPassword">Confirm password:</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm new password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              className={formik.errors.confirmPassword && formik.touched.confirmPassword ? "input-error":""}
            />
            {formik.errors.confirmPassword && formik.touched.confirmPassword && (<p>{formik.errors.confirmPassword}</p>)}
          </div>
          <div className="form-control">
            <Button type="submit">Change</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
