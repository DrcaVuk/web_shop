import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ServerLink } from "../../../constants";
import { AuthContext } from "../../../shared/context/auth-context"; 
import { useNavigate } from "react-router-dom";

import Button from "../../../shared/components/UI/Button/Button";

import "./ProductItem.css";

const ProductItem = (props) => {
  const navigate = useNavigate()
  const auth = useContext(AuthContext);
  const handlerAddBag = (id, name, price) => {
    if(auth.isLoggedIn) {
      auth.addItem(id, name, price);
    } else {
      return navigate("/login");
    }
    
  };

  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img src={`${ServerLink}/${props.image}`} alt={props.alt} />
        <div>
          <h5>View Details</h5>
        </div>
      </Link>
      <div className="price">
        <h4>{props.name}</h4>
        <p>Shop Outdoors</p>
        <p>$ {props.price}</p>
        <Button
          type="button"
          onClick={() => handlerAddBag(props.id, props.name, props.price)}
        >
          Add to Bag
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
