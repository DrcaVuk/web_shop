import React, { useState, useEffect} from "react";
import { useHttpClient } from "../../../shared/hooks/http-hook";

import ProductItem from "../../../shared/components/ProductItem/ProductItem";
import Title from "../../../shared/components/UI/Title/Title";
import LoadingSpinner from "../../../shared/components/UI/LoadingSpinner/LoadingSpinner";

import classed from "./PopularArrivals.css";

const PopularArrivals = () => {
  const [ items, setItems ] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fatchItems = async () => {
      let resData; 
      resData = await sendRequest("/product/4/1/all", "GET")
      setItems(resData.data.products.docs);
    }
    fatchItems();
  },[]);
  return (
    <div className="container-fluid">
      <div className="container">
        <Title className={classed.title}>Popular Arrivals</Title>
        <div className="row">
          {isLoading && <LoadingSpinner />}
          {!isLoading && items.length > 0 && items.map((item, index) => (
            <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularArrivals;
