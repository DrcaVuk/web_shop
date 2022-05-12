import { useState, useCallback, useEffect } from "react";
import { useHttpClient } from "../hooks/http-hook";

export const useStore = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [bag_id, setBug_id] = useState(null);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [bag, setBag] = useState([]);
  const [inBag, setInBag] = useState(0);

  const getBag = useCallback(async () => {
    let dataBag;
    try {
      dataBag = await sendRequest(`/bag`, "GET");
    } catch (err) {
      console.log(err);
    }

    setBug_id(dataBag.data.existingBag._id);
    localStorage.setItem(
      "bagData",
      JSON.stringify({
        bag_id: bag_id,
      })
    );
    setBag(dataBag.data.items);
    console.log("REC: ", dataBag.data)
    setInBag(bag.length);
    console.log("IKONA", inBag);
    console.log("BAG:", bag);
  }, []);

  const addItem = useCallback(async (item_id, name, price) => {
    if (bag_id === null) {
      let dataBag;
      try {
        dataBag = await sendRequest(`/bag`, "GET");
      } catch (err) {
        console.log(err);
      }
      console.log("DataBag:", dataBag);
      setBug_id(dataBag.data.existingBag._id);
      console.log(bag_id);
    }
    console.log("BAGID:", bag_id);
    try {
      await sendRequest("/bag", "POST", {
        bag_id: bag_id,
        product_id: item_id,
        name,
        price,
        quantity: 1,
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const removeItem = useCallback(async (item_id) => {
    try {
      await sendRequest(`/bag/${item_id}`, "DELETE");
    } catch (err) {
      console.log(err);
    }
  }, []);

  const updateItem = useCallback(async (item_id) => {
    await sendRequest(`/bag/${item_id}`, "DELET");
  }, []);

  useEffect(() => {
    console.log("AKCIJA");
    const storedData = JSON.parse(localStorage.getItem("bagData"));
    if (storedData.bag_id) {
      setBug_id(storedData.bag_id);
    }
  }, [getBag, addItem, removeItem, updateItem]);

  return {
    subtotal,
    total,
    bag,
    inBag,
    addItem,
    removeItem,
    updateItem,
    getBag,
  };
};
