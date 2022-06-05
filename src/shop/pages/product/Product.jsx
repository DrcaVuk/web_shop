import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useHttpClient } from "../../../shared/hooks/http-hook";
import { ServerLink } from "../../../constants";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../shared/context/auth-context";

import Title from "../../../shared/components/UI/Title/Title";
import Description from "../../../shared/components/UI/Description/Description";
import Button from "../../../shared/components/UI/Button/Button";

import classed from "./Product.module.css";

const Product = (props) => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [item, setItem] = useState({});
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const { item_id } = useParams();
  useEffect(() => {
    const fatchItems = async () => {
      let itemData;
      try {
        itemData = await sendRequest(`/product/${item_id}`, "GET");
        setItem(itemData.data.product);
      } catch (err) {
        console.log(err);
      }
    };
    fatchItems();
  }, []);
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-50">
            <img src={`${ServerLink}/${item.image[0]}`} alt={item.name} />
          </div>
          <div className={`col-50 ${classed.col}`}>
            <Title>{item.name}</Title>
            <Description>{item.description}</Description>
            <p>Price: $ {item.price}</p>
            <Button
              className={classed.button}
              type="button"
              onClick={() => {
                if (auth.isLoggedIn) {
                  auth.addItem(item._id, item.name, item.price);
                } else {
                    return navigate("/login")
                }
              }}
            >
              Add to Bag
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
