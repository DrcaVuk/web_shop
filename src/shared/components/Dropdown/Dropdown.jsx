import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import { useHttpClient } from "../../hooks/http-hook";
import { AiOutlineUser } from "react-icons/ai";
import { URL } from "../../../constants";

import noImage from '../../images/noImg.jpg';
import "./Dropdown.css";

const Dropdown = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
  const [user, setUser] = useState({});

  useEffect(() => {
    let userData;
    const featchUser = async () => {
      try {
        userData = await sendRequest("/user", "GET");
        setUser(userData.data);
      } catch (err) {
        console.log(err);
      }
    };
    featchUser();
  }, []);

  return (
    <div className="dropdown">
      <AiOutlineUser />
      <div className="dropdown-box">
        <div className="dropdown-header">
          <div className="avatar">
            <img src={user.image ? `${URL}/${user.image}` : noImage} alt={user.image} />
          </div>
          <div className="user">
            <h2>{user.fullName ? user.fullName : ""}</h2>
            <p>{user.email}</p>
          </div>
        </div>
        <div className="dropdown-body">
          <ul>
            <li>
              <Link to="/user">Profil</Link>
            </li>
            <li>
              <Link to="/change-password">Change password</Link>
            </li>
            {auth.role === 1 && (
              <li>
                <Link to="/newslatter/list">Newslatter</Link>
              </li>
            )}
            {auth.role === 1 && (
              <li>
                <Link to="/messages">Messages</Link>
              </li>
            )}
          </ul>
        </div>
        <div className="dropdown-footer">
          <button type="button" onClick={auth.logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;