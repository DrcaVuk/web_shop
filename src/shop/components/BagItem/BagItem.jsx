import Reactm, { useContext } from "react";
import { AuthContext } from "../../../shared/context/auth-context";

import "./BagItem.css";
const BagItem = (props) => {
  const auth = useContext(AuthContext);

  const handlerRemoveItem = (id) => {
    auth.removeItem(id);
  };

  const handlerQuantity = (id, val) => {
    auth.updateItem(id, val);
  };

  return (
    <div className="bag-item">
      <h2>{props.name}</h2>
      <p>
        Price: <span>$ {props.price.toFixed(2)}</span>
      </p>
      <div>
        <p>
          Quantity: <span>{props.quantity}</span>
        </p>
        <button
          type="button"
          onClick={() => handlerQuantity(props.item_id, 1)}
        >
          +
        </button>
        <button
          type="button"
          onClick={() => handlerQuantity(props.item_id, -1)}
        >
          -
        </button>
      </div>

      <button type="button" onClick={() => handlerRemoveItem(props.item_id)}>
        Remove<span></span>
      </button>
    </div>
  );
};

export default BagItem;
