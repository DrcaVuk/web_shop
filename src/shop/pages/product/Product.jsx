import React from "react";
import { useParams } from "react-router-dom";

const Product = props => {
    let { id } = useParams();
    return(
        <div className="container-fluid">
            <div className="container">
                <h1>Product</h1>
                <p>ID: {id}</p>
            </div>
        </div>
    )
}

export default Product;