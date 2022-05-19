import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { FaCloudUploadAlt } from "react-icons/fa";
import Button from "../../shared/components/UI/Button/Button";

const ProductForm = (props) => {
  const [previewUrl, setPreviewUrl] = useState();
  const [viewImage, setViewImage] = useState("");
  const formik = useFormik({
    initialValues: {
      name: props.name ? props.name : "",
      description: props.description ? props.description : "",
      price: props.price ? props.price : 0,
      category: props.category ? props.category : "",
      image: null,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required!"),
      description: Yup.string().required("Description is required!"),
      price: Yup.number().required("Ples enter price!"),
      category: Yup.string().required("Please select category"),
      image: Yup.mixed().required("Please select image!"),
    }),
    onSubmit: (values) => {
      props.handler(values);
    },
  });

  useEffect(() => {
    if (!formik.values.image) return;

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(formik.values.image);
  }, [formik.values.image]);


  return (
    <form onSubmit={formik.handleSubmit}>
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
              <option value="man">Man</option>
              <option value="woman">Woman</option>
              <option value="children">Children</option>
            </select>
          </div>
        </div>
        <div className="col-50">
          <div className="box-image">
            {previewUrl && <img src={previewUrl} />}
          </div>
          <div className="form-control">
            <label className="btn-file">
              <input
                className="input-error"
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={(event) => {
                  formik.setFieldValue("image", event.currentTarget.files[0]);
                }}
              />
              <FaCloudUploadAlt />
            </label>
          </div>
          <div className="form-control">
              <Button type="submit">Save</Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProductForm;
