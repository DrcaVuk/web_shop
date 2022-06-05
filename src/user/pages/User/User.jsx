import React, { useState, useEffect } from "react";
import { useHttpClient } from "../../../shared/hooks/http-hook";

import { AiOutlineEdit } from "react-icons/ai";

import Title from "../../../shared/components/UI/Title/Title";
import UpdateAddress from "../../components/updateAddress";
import UpdatePhone from "../../components/updatePhone";
import { ServerLink } from "../../../constants";
import noImg from "../../../shared/images/noImg.jpg"

import classed from "./User.module.css";

const UpdateUser = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [isAddress, setIsAddress] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [ userData, setUserData ] = useState({});

  const handlerAddress = () => {
    if (isPhone) {
      setIsPhone(false);
    }
    setIsAddress(!isAddress);
  };

  const handlerUpdateAddress = async (values) => {
    let user = userData;
    user.address = values.address;
    user.city = values.city;
    user.zipCode = values.zipCode;
    setUserData(user);
    setIsAddress(false);
    await sendRequest("/user/", "PUT", user);
  }

  const handlerPhone = () => {
    if (isAddress) {
      setIsAddress(false);
    }
    setIsPhone(!isPhone);
  };

  const handlerUpdatePhone = async (values) => {
    let user = userData; 
    user.phone = values.phone;
    setUserData(user);
    setIsPhone(false);
    await sendRequest("/user/", "PUT", user);
  }

  useEffect(() => {
    const handlerUser = async () => {
      let responseData;
      try {
        responseData = await sendRequest("/user", "GET");
        setUserData(responseData.data);
      } catch(err) {
        console.log(err);
      }
    }
    handlerUser();
  }, [])

  return (
    <div className="container-fluid">
      <div className="container">
        <Title>User name</Title>
        {isAddress && <UpdateAddress data={userData} cancel={handlerAddress} handlerUpdateAddress={handlerUpdateAddress} />}
        {isPhone && <UpdatePhone cancel={handlerPhone} handlerUpdatePhone={handlerUpdatePhone} phone={userData.phone}/>}
        <div className="row">
          <div className={`col-50 ${classed.imagebox}`}>
            <img src={userData.image ? `${ServerLink}/${userData.image}`: noImg} />
          </div>
          <div className="col-50">
            <div className={`row ${classed.box}`}>
              <div className="col-50">
                <p>Full name: {userData.fullName}</p>
                <p>Address: {userData.address}</p>
                <p>City: {userData.city}</p>
                <p>Zip: {userData.zipCode}</p>
                <p>Country: {userData.contry}</p>
              </div>
              <div className="col-50">
                <button className={classed.button} onClick={handlerAddress}>
                  <AiOutlineEdit />
                </button>
              </div>
            </div>
            <div className={`row ${classed.box}`} onClick={handlerPhone}>
              <div className="col-50">
                <p>
                  Phone: <span>{userData.phone}</span>
                </p>
              </div>
              <div className="col-50">
                <button className={classed.button}>
                  <AiOutlineEdit />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
