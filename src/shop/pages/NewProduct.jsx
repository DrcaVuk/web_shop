import React, { useState, useEffect } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";

import Title from "../../shared/components/UI/Title/Title";
import ProductForm from "../components/ProductForm";

const NewProduct = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const heandlerNewProduct = async (values) => {
      const formData = new FormData();
      formData.append("image", values.image);
      formData.append("name", values.name);
      formData.append("descriptrion", values.description);
      formData.append("price", values.price);
      formData.append("category", values.category);
      try {
        await  sendRequest("/product", "POST", formData);
      } catch (err) {
          console.log(err);
      }
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <Title>Add article</Title>
        <ProductForm handler={heandlerNewProduct}/>
      </div>
    </div>
  );
};

export default NewProduct;
