import React, {useContext, useState} from "react";
import { AuthContext } from "../../context/auth-context";
import { NavLink, Link } from "react-router-dom";
import {AiOutlineMenu, AiOutlineClose,  AiOutlineShoppingCart } from "react-icons/ai";
import Dropdown from "../Dropdown/Dropdown";
import Logo from "../UI/Logo/Logo";

import "./MainNavigation.css"

const MainNavigation = () => {
  const auth = useContext(AuthContext);
  const [ active , setActive ] = useState(false);

  const buttonHandler = () => {
    setActive(!active);
  }

  return <nav>
    <Logo />
    <div className={active ?"menu active":"menu" } onClick={buttonHandler}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/shop/man">Man</NavLink>
      <NavLink to="/shop/woman">Woman</NavLink>
      <NavLink to="/about">About </NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
      {auth.isLoggedIn && <Dropdown />}
      {!auth.isLoggedIn && <Link to="/login">Login</Link>}
      <Link className="bug-icon" to="/bag"><AiOutlineShoppingCart/><span>{auth.inBag}</span></Link>
    </div>
    <div className="icons">
      <button className="icon" onClick={buttonHandler}>{active ? <AiOutlineClose />:<AiOutlineMenu/>}</button>
    </div>
  </nav>;
};

export default MainNavigation;
