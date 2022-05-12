import { useState, useCallback, useEffect, useContext } from "react";
import { useHttpClient } from "./http-hook";
import { AuthContext } from "../context/auth-context";

export const useStore = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [inBag, setInBag] = useState(0);
  
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [bag, setBag] = useState([]);
  const [bagId, setBagId] = useState(null);
  const getBagId = useCallback(async () => {
    if (bagId === null) {
      const storedData = JSON.parse(localStorage.getItem("bagData"));
      if (localStorage.getItem("bagData") !== null && storedData.bagId) {
        setBagId(storedData.bagId);
      } else {
        let dataBag;
        try {
          dataBag = await sendRequest("/bag", "GET");
          setBagId(dataBag.data.existingBag._id);
          console.log("LISTA: ", dataBag.data.items);
          localStorage.setItem(
            "bagData",
            JSON.stringify({
              bagId: dataBag.data.existingBag._id,
            })
          );
        } catch (err) {
          console.log(err);
        }
      }
    }
  }, []);

  const getItems = useCallback(async () => {
    if (bagId === null) {
      getBagId();
    }

    if (auth.isLoggedIn) {
      let dataBag;

      try {
        dataBag = await sendRequest("/bag", "GET");
        setBag(dataBag.data.items);
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  const updateItem = useCallback(async () => {}, []);
  const deleteItem = useCallback(async (item_id) => {}, []);
  const addItem = useCallback(async () => {}, []);

//   useEffect(() => {
//     if (bagId !== null) {
//       getItems();
//     }
//   }, [deleteItem, addItem, updateItem]);

//   useEffect(() => {
//     setInBag(bag.length);
//     let total = 0;
//     bag.map((item) => {
//       total += item.price * item.quantity;
//     });
//     setSubtotal(total);
//     setTotal(total);
//   }, [bag]);

//   useEffect(() => {
//       if(!auth.isLoggedIn) {
//           setBag([]);
//           setBagId("");
//           setInBag(0);
//       }
//   }, [auth.isLoggedIn]);

  return {
    total,
    subtotal,
    inBag,
    bag,
    getBagId,
    getItems,
    updateItem,
    deleteItem,
    addItem,
  };
};
