import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHttpClient } from "../../../shared/hooks/http-hook";
import { URL } from "../../../constants";
import data from "date-and-time";


import Title from "../../../shared/components/UI/Title/Title";
import Description from "../../../shared/components/UI/Description/Description";

const Product = props => {
    const [item, setItem ] = useState({}); 
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const { item_id } = useParams();
    useEffect(()=> {
        const fatchItems = async () => {
            let itemData; 
            try {
                itemData = await sendRequest(`/product/${item_id}`, "GET");
                setItem(itemData.data.product)
            } catch(err) {
                console.log(err);
            }
        }
        fatchItems();
    },[])
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-50">
                        <img src={`${URL}/${item.image}`} alt={item.name}/>
                    </div>
                    <div className="col-50">
                        <Title>{item.name}</Title>
                        <Description>{item.description}</Description>
                        <p>Price: $ {item.price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Product;