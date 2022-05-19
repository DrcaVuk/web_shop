import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook";

import Title from "../../shared/components/UI/Title/Title";
import ProductForm from "../components/ProductForm";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const { item_id } = useParams();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [item, setItem] = useState();

  useEffect(() => {
    let data;
    const fatchItem = async () => {
      try {
        data = await sendRequest(`/product/${item_id}`, "GET");
        setItem(data.data.product);
      } catch (err) {
        console.log(err);
      }
    };
    fatchItem();
  }, [item_id]);

  const handlerUpdate = async (values) => {
      const formData = new FormData();
      formData.append("image", values.image);
      formData.append("name", values.name);
      formData.append("description", values.description);
      formData.append("price", values.price);
      formData.append("category", values.category);
      formData.append("product_id", item._id);
    try {
        await sendRequest("/product", "PUT", formData);
        return(navigate("/shop/all"))
    } catch(err) {
        console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="container">
        <Title>Update article</Title>
        {item && <ProductForm
          name={item.name}
          description={item.description}
          price={item.price}
          handler={handlerUpdate}
        />}
      </div>
    </div>
  );
};

export default UpdateProduct;
