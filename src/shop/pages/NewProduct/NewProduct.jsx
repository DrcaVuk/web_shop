import React, { useState } from "react";
import { useHttpClient } from "../../../shared/hooks/http-hook";

import Title from "../../../shared/components/UI/Title/Title";
import ProductForm from "../../components/ProductForm/ProductForm";

const NewProduct = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [images, setImages] = useState([]);

  const handlerImageDelite = async (values) => {
    try {
      await sendRequest("/blog/image", "PUT", values);
    } catch (err) {
      console.log(err.message);
    }

    let newImages = [];
    images.map((image) => {
      if (image !== values.image_name) {
        newImages.push(image);
      }
      setImages(newImages);
    });
    console.log("newImages", newImages);
  };

  const heandlerNewProduct = async (values) => {
    const formData = new FormData();
    for (let value in images) {
      formData.append("files", images[value]);
    }
    formData.append("name", values.name);
    formData.append("descriptrion", values.description);
    formData.append("price", values.price);
    formData.append("category", values.category);
    setImages([]);
    try {
      await sendRequest("/product", "POST", formData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <Title>Add article</Title>
        <ProductForm
          handler={heandlerNewProduct}
          imagesSer={[]}
          handlerImageDelite={handlerImageDelite}
          images={images}
          setImages={setImages}
        />
      </div>
    </div>
  );
};

export default NewProduct;
