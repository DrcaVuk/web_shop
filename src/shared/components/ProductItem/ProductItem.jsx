import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { URL } from "../../../constants";

import "./ProductItem.css";

const ProductItem = props => {
  return (
    <div className="item" key={props.key}>
      <Link to={`/product/${props.id}`}>
        {props.image && <img src={`${URL}/${props.image}`} alt={props.alt} />}
        <div>
          <h5>View Details</h5>
        </div>
      </Link>
      <div className="price">
        <h4>{props.name}</h4>
        <p>Shop Outdoors</p>
        <p>$ {props.price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
