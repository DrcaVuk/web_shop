import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import {AiOutlineMenu } from "react-icons/ai";

import Logo from "../UI/Logo/Logo";

import "./Navbar.css"

const Navbar = (props) => {
  const [isActive, setIsActive ] = useState(false)
  return <nav>
    <Logo />
    <div className="menu">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/man">Man</NavLink>
      <NavLink to="/woman">Woman</NavLink>
      <NavLink to="/about">About </NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
    </div>
    {isActive && <div className="icons">
      <button className="icon"><AiOutlineMenu/></button>
    </div>}
  </nav>;
};

export default Navbar;
