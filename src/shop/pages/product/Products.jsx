import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { useHttpClient } from "../../../shared/hooks/http-hook";

import ProductItem from "../../../shared/components/ProductItem/ProductItem";
import Description from "../../../shared/components/UI/Description/Description";
import Title from "../../../shared/components/UI/Title/Title";
import LoadingSpinner from "../../../shared/components/UI/LoadingSpinner/LoadingSpinner";

const Product = props => {
    const [ items, setItem ] = useState([]);
    const [ page, setPgae ] = useState(1);
    const [ limit, setLimit ] = useState(10);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    let { item } = useParams();

    useEffect(() => {
        const fatchItem = async () => {
            let itemData; 
            try {
            itemData = await sendRequest(`/product/${limit}/${page}`, "GET", {filter: item});
            setItem(itemData.data.products.docs);
        } catch (err) {
            console.log(err);
        }
        }
        fatchItem();
    }, [])
    return(
        <div className="container-fluid">
            <div className="container">
                {isLoading && <LoadingSpinner />}
                {!isLoading && 
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