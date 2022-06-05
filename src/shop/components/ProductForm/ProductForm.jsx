import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Button from "../../../shared/components/UI/Button/Button";
import UploadFile from "../../../shared/components/UploadFile/UpladFile";

const ProductForm = (props) => {
  const formik = useFormik({
    initialValues: {
      name: props.name ? props.name : "",
      description: props.description ? props.description : "",
      price: props.price ? props.price : 0,
      category: props.category ? props.category : "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required!"),
      description: Yup.string().required("Description is required!"),
      price: Yup.number().required("Ples enter price!"),
      category: Yup.string().required("Please select category"),
    }),
    onSubmit: (values) => {
      props.handler(values);
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
      <div className="row">
        <div className="col-50">
          <div className="form-control">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter product name!"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className={formik.errors.name && formik.touched.name ? "input-error" :""}
            />
            {formik.errors.name && formik.touched.name && (<p>{formik.errors.name}</p>)}
          </div>
          <div className="form-control">
            <label htmlFor="description">Description:</label>
            <textarea
              className={
                formik.errors.description && formik.touched.description
                  ? "input-error"
                  : ""
              }
              name="description"
              rows="5"
              placeholder="Enter description!"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
            ></textarea>
            {formik.errors.description && formik.touched.description && (
              <p>{formik.errors.description}</p>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="price">Price:</label>
            <input
              className={
                formik.errors.price && formik.touched.price
                  ? "input-error"
                  : ""
              }
              type="number"
              name="price"
              placeholder="Enter price"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
            />
            {formik.errors.price && formik.touched.price && (<p>{formik.errors.price}</p>)}
          </div>
          <div className="form-control">
            <label htmlFor="category">Category:</label>
            <select
              name="category"
              as={formik.values.category}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="">Select category</option>
              <option value="man">Man</option>
              <option value="woman">Woman</option>
              <option value="children">Children</option>
            </select>
          </div>
        </div>
        <div className="col-50">
          <UploadFile imagesSer={props.imagesSer} images={props.images} setImages={props.setImages} handlerImageDelite={props.handlerImageDelite} />
          <div className="form-control">
              <Button type="submit">Save</Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProductForm;
