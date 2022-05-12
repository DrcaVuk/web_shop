import React, { useState, useEffect } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";

import { AiOutlineEdit, AiOutlineUpload } from "react-icons/ai";
import Button from "../../shared/components/UI/Button/Button";
import Title from "../../shared/components/UI/Title/Title";
import UpdateAddress from "../components/updateAddress";
import UpdatePhone from "../components/updatePhone";
import ImportImage from "../components/updateImage";

import img from "../../shared/images/Img03.png";

import classed from "./user.module.css";

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
    await sendRequest("/user/", "PUT", values);
  }

  const handlerPhone = () => {
    if (isAddress) {
      setIsAddress(false);
    }
    setIsPhone(!isPhone);
  };

  const handlerUpdatePhone = async (values) => {
    await sendRequest("/user/", "PUT", values);
  }

  return (
    <div className="container-fluid">
      <div className="container">
        <Title>User name</Title>
        {isAddress && <UpdateAddress data={userData} cancel={handlerAddress} handlerUpdateAddress={handlerUpdateAddress} />}
        {isPhone && <UpdatePhone cancel={handlerPhone} handlerUpdatePhone={handlerUpdatePhone}/>}
        <div className="row">
          <div className={`col-50 ${classed.imagebox}`}>
            <img src={img} />
            <button>
              <AiOutlineUpload />
            </button>
          </div>
          <div className="col-50">
            <div className={`row ${classed.box}`}>
              <div className="col-50">
                <p>Address: Cara Dusana bb</p>
                <p>City: Stanisic</p>
                <p>Zip: 25284</p>
                <p>Country: Srbija</p>
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
                  Phone: <span>+381 64 700 777 0</span>
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
