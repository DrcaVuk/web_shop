import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";
import Title from "../../shared/components/UI/Title/Title";
import BagItem from "../components/BagItem";
import { useNavigate } from "react-router-dom";

import "./Bag.css";

const Bag = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isLoggedIn) {
      auth.getItems();
    } else {
      return navigate("/login");
    }
  }, [auth.isLoggedIn]);

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-50">
            <Title>Bag</Title>
            {auth.inBag === 0 && (
              <div className="bag-empty">
                <p>Your bag is empty.</p>
                <Link to="/shop/all">Keep shopping<span></span></Link>
              </div>
            )}
            {auth.inBag > 0 &&
              auth.bag.map((item, index) => (
                <BagItem
                  key={index}
                  item_id={item._id}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                />
              ))}
          </div>
          <div className="col-50">
            <Title>Summary</Title>
            <p className="subtotal">
              Subtotal: <span>{auth.subtotal} $</span>
            </p>
            <hr />
            <p className="total">
              Total: <span>{auth.total} $</span>
            </p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bag;
