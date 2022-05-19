import { useState, useCallback, useEffect } from "react";
import { useHttpClient } from "./http-hook";

let logoutTime;

export const useAuth = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [user_id, setUser_id] = useState(false);
  const [role , setRole] = useState(5);

  const [bagId, setBagId] = useState(null);
  const [inBag, setInBag] = useState(0);
  const [bag, setBag] = useState([]);
  const [total, setTotal] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  const login = useCallback((uid, token, role, expirationDate) => {
    setToken(token);
    setIsLoggedIn(true);
    setUser_id(uid);
    setRole(role);
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: uid,
        role: role,
        token: token,
        expiration: tokenExpirationDate.toISOString(),
      })
    );
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setToken(null);
    setTokenExpirationDate(null);
    setUser_id(null);
    setRole(5);
    localStorage.removeItem("userData");
  }, []);

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
          setBag(dataBag.data.items);
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
  }, [bagId, sendRequest]);

  const getItems = useCallback(async (r) => {
    if (bagId === null) {
      await getBagId();
    }

    if (isLoggedIn) {
      let dataBag;
      try {
        dataBag = await sendRequest("/bag", "GET");
        setBag(dataBag.data.items);
      } catch (err) {
        console.log(err);
      }
    }
  }, [bagId, getBagId, isLoggedIn, sendRequest]);
 
  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();
        logoutTime = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTime);
    }
  }, [token, logout, tokenExpirationDate]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      login(
        storedData.userId,
        storedData.token,
        storedData.role,
        new Date(storedData.expiration)
      );
    }
  }, [login]);

  const deleteItem = useCallback(async (item_id) => {
    try{
      await sendRequest(`/bag/${item_id}`, "DELETE")
    } catch(err) {
      console.log(err);
    }
    getItems("Delete Item");
  }, [getItems, sendRequest]);

  const addItem = useCallback(async (item_id, name, price) => {
    try {
      await sendRequest("/bag", "POST", {
        bag_id: bagId,
        product_id: item_id,
        name,
        price,
        quantity: 1,
      });
    } catch (err) {
      console.log(err);
    }
    getItems("add Item");
  }, [bagId, getItems, sendRequest]);

  const updateItem = useCallback(async (item_id, quantity) => {
    try {
      await sendRequest("/bag", "PUT", {item_id, quantity});
      getItems("Update Item");
    } catch(err){ 
      console.log(err);
    }
  },[getItems, sendRequest])

  useEffect(()=> {
    if(isLoggedIn) {
      getBagId();
    } else {
      setBag([]);
      setInBag(0);
      setBagId(null);
      localStorage.removeItem("bagData");
    }
  },[isLoggedIn, getBagId])

  useEffect(() => {
    setInBag(bag.length)
    let total = 0;
    bag.map(item => {
      return total += item.price * item.quantity;
    })
    setSubtotal(total);
    setTotal(total);
  }, [bag, deleteItem, updateItem, addItem])

  return {bag, bagId, subtotal, total, inBag, token, addItem, updateItem, getItems, deleteItem, login, logout, user_id, isLoggedIn, role };
};
