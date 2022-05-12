import React, {useContext, useEffect, useState} from "react";
import { AuthContext } from "../../context/auth-context";
import { NavLink, Link } from "react-router-dom";
import {AiOutlineMenu, AiOutlineClose,  AiOutlineShoppingCart } from "react-icons/ai";

import Logo from "../UI/Logo/Logo";

import "./Navbar.css"

const Navbar = () => {
  const auth = useContext(AuthContext);
  const [ active , setActive ] = useState(false);

  const buttonHandler = () => {
    setActive(!active);
  }

  useEffect(() => {
    if(auth.isLoggedIn) {
      //auth.getItems();
    }
  }, [auth.isLoggedIn])

  return <nav>
    <Logo />
    <div className={active ?"menu active":"menu" } onClick={buttonHandler}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/shop/man">Man</NavLink>
      <NavLink to="/shop/woman">Woman</NavLink>
      <NavLink to="/about">About </NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
      {auth.isLoggedIn && <button type="button" onClick={auth.logout}>Logout</button>}
      {!auth.isLoggedIn && <Link to="/login">Login</Link>}
      <Link className="bug-icon" to="/bag"><AiOutlineShoppingCart/><span>{auth.inBag}</span></Link>
    </div>
    <div className="icons">
      <button className="icon" onClick={buttonHandler}>{active ? <AiOutlineClose />:<AiOutlineMenu/>}</button>
    </div>
  </nav>;
};

export default Navbar;
