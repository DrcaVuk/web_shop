import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useHttpClient } from "../../../shared/hooks/http-hook";
import { AuthContext } from "../../../shared/context/auth-context";
import * as Yup from "yup";
import { useFormik } from "formik";

import Title from "../../../shared/components/UI/Title/Title";
import Button from "../../../shared/components/UI/Button/Button";
import LoadingSpinner from "../../../shared/components/UI/LoadingSpinner/LoadingSpinner";

import classed from "./Login.module.css";

const Login = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email")
        .required("Please enter email !"),
      password: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("please enter password !"),
    }),
    onSubmit: (values) => {
      const fetchLogin = async () => {
        let loginData;
        try {
          loginData = await sendRequest("/user/login", "POST", values);
        } catch (err) {
          console.log(err);
        }
        await auth.login(
          loginData.data.user_id,
          loginData.data.token,
          loginData.data.role
        );
        formik.resetForm();
        navigate(-1);
      };
      fetchLogin();
    },
  });

  return (
    <div className="container-fluid">
      <div className="container">
        {isLoading && <LoadingSpinner />}
        {!isLoading && (
          <form className={classed.loginForm} onSubmit={formik.handleSubmit}>
            <Title>Login</Title>
            <div className="form-control">
              <label htmlFor="email">Email:</label>
              <input
                className={
                  formik.errors.email && formik.touched.email
                    ? "input-error"
                    : ""
                }
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.errors.email && formik.touched.email && (
                <p>{formik.errors.email}</p>
              )}
            </div>
            <div className="form-control">
              <label htmlFor="password">Password:</label>
              <input
                className={
                  formik.errors.password && formik.touched.password
                    ? "input-error"
                    : ""
                }
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.errors.password && formik.touched.password && (
                <p>{formik.errors.password}</p>
              )}
            </div>
            <div className="form-group">
              <Button className={classed.button} type="submit">Login</Button>
              <Button className={classed.button} to="/join-us">Join Us</Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
