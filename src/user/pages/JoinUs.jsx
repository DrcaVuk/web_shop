import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { useNavigate } from "react-router-dom";
import Title from "../../shared/components/UI/Title/Title";
import Button from "../../shared/components/UI/Button/Button";

const JoinUs = (props) => {
  const navigate = useNavigate();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const formik = useFormik({
    initialValues: {
      frstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      city: "",
      zipCode: "",
    },
    validationSchema: Yup.object({
      frstName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Please enter frst name!"),
      lastName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Please enter last name!"),
      email: Yup.string()
        .email("Email not corectli")
        .required("Please enter email!"),
      password: Yup.string()
        .min(8, "Too Short!")
        .max(30, "Too Long!")
        .required("Please enter password!"),
      phone: Yup.number().required("Please enter contact number!"),
      address: Yup.string().required("Please enter your address!"),
      city: Yup.string().required("Please enter city nama!"),
      zipCode: Yup.number().required("Please enter post code!"),
    }),
    onSubmit: (values) => {
      const createUser = async () => {
        let dataUser; 
        console.log(values)
        try {
          dataUser = await sendRequest("/user/crete", "POST", values);
          console.log(dataUser);
          formik.resetForm();
        } catch (err) {
          console.log(err);
        }
        return navigate("/");
        
      }
      createUser();
    },
  });
  return (
    <div className="container-fluid">
      <div className="container">
        <Title>Join Us</Title>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-control">
            <label htmlFor="frstName">Frst name:</label>
            <input
              type="text"
              name="frstName"
              placeholder="Enter your frst name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.frstName}
              className={
                formik.errors.frstName && formik.touched.frstName
                  ? "input-error"
                  : ""
              }
            />
            {formik.errors.frstName && formik.touched.frstName && (
              <p>{formik.errors.frstName}</p>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="lastName">Last name:</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              className={
                formik.errors.lastName && formik.touched.lastName
                  ? "input-error"
                  : ""
              }
            />
            {formik.errors.lastName && formik.touched.lastName && (
              <p>{formik.errors.lastName}</p>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={
                formik.errors.email && formik.touched.email ? "input-error" : ""
              }
            />
            {formik.errors.email && formik.touched.email && (
              <p>{formik.errors.email}</p>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={
                formik.errors.password && formik.touched.password
                  ? "input-error"
                  : ""
              }
            />
            {formik.errors.password && formik.touched.password && (
              <p>{formik.errors.password}</p>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your contact number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              className={
                formik.errors.phone && formik.touched.phone ? "input-error" : ""
              }
            />
            {formik.errors.phone && formik.touched.phone && (
              <p>{formik.errors.phone}</p>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
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
              placeholder="Enter city name"
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
              type="number"
              name="zipCode"
              placeholder="Enter zip code"
              onChange={formik.handleChange}
              onBlur={formik.onBlur}
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
          <div className="form-control">
            <Button type="submit">Join Us</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinUs;
