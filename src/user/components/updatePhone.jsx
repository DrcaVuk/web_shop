import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

import Modal from "../../shared/components/Modal/Modal";
import Title from "../../shared/components/UI/Title/Title";
import Button from "../../shared/components/UI/Button/Button";

const UpdatePhone = (props) => {
  const formik = useFormik({
    initialValues: {
      phone: props.phone ? props.phone : "",
    },
    validationSchema: Yup.object({
        phone: Yup.number().required("Please enter phone number."),
    }),
    onSubmit: (value) => {
      props.handlerUpdatePhone(value);
      formik.resetForm();
    },
  });
  return (
    <Modal>
      <Title>Update phone</Title>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            className={formik.errors.phone && formik.touched.phone ? "input-error" :""}
          />
          {formik.errors.phone && formik.touched.phone && (<p>{formik.errors.phone}</p>)}
        </div>
        <div className="form-group">
          <Button type="submit">Save</Button>
          <Button type="button" onClick={props.cancel}>
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default UpdatePhone;
