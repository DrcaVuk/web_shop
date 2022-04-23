import React from "react";
import ProductItem from "../../../shared/components/ProductItem/ProductItem";
import Title from "../../../shared/components/UI/Title/Title";

import classed from "./PopularArrivals.css";

const PopularArrivals = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <Title className={classed.title}>Popular Arrivals</Title>
        <div className="row">
          <ProductItem id="22" />
          <ProductItem id="23" />
          <ProductItem id="24" />
          <ProductItem id="25" />
        </div>
      </div>
    </div>
  );
};

export default PopularArrivals;
