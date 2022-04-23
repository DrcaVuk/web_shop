import React from "react";
import { Link } from "react-router-dom";

import img from "../../images/bg.png";
import "./ProductItem.css";

const ProductItem = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img src={img} alt={props.alt} />
        <div>
          <h5>View Details</h5>
        </div>
      </Link>
      <div className="price">
        <h4>Nike Shoes</h4>
        <p>Shop Outdoors</p>
        <p>$125</p>
      </div>
    </div>
  );
};

export default ProductItem;
