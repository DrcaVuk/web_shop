import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { useHttpClient } from "../../../shared/hooks/http-hook";

import ProductItem from "../../../shared/components/ProductItem/ProductItem";
import LoadingSpinner from "../../../shared/components/UI/LoadingSpinner/LoadingSpinner";

const Product = () => {
    const [ items, setItem ] = useState([]);
    const [ page, setPage ] = useState(1);
    const [ limit, setLimit ] = useState(10);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    let { category } = useParams();

    useEffect(() => {
        const fatchItem = async () => {
            let itemData; 
            try {
            itemData = await sendRequest(`/product/${limit}/${page}/${category}`, "GET");
            setItem(itemData.data.products.docs);
        } catch (err) {
            console.log(err);
        }
        }
        fatchItem();
    }, [category, limit, page, sendRequest])
    return(
        <div className="container-fluid">
            <div className="container">
                {isLoading && <LoadingSpinner />}
                {!isLoading && items.length > 0 && 
                <div className="row">
                   {items.map((item, index) => (
                       <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
                   ))}
                </div>}
            </div>
        </div>
    )
}

export default Product;