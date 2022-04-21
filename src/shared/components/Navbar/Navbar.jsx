import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import {AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import Logo from "../UI/Logo/Logo";

import "./Navbar.css"

const Navbar = (props) => {
  const [ active , setActive ] = useState(false);

  const buttonHandler = () => {
    setActive(!active);
    console.log("Proslo", active)
  }

  return <nav>
    <Logo />
    <div className={active ?"menu active":"menu" } onClick={buttonHandler}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/man">Man</NavLink>
      <NavLink to="/woman">Woman</NavLink>
      <NavLink to="/about">About </NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
    </div>
    <div className="icons">
      <button className="icon" onClick={buttonHandler}>{active ? <AiOutlineClose />:<AiOutlineMenu/>}</button>
    </div>
  </nav>;
};

export default Navbar;
