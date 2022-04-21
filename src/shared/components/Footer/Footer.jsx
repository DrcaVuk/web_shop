import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillInstagram, AiFillGooglePlusSquare, AiFillFacebook, AiFillLinkedin} from "react-icons/ai";

import Logo from "../UI/Logo/Logo";

import './Footer.css';

const Footer = (props) => {
  return (
    <footer>
      <div className="container box">
        <div className="row">
          <div className="col-16">
            <Logo />
          </div>
          <div className="col-16">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/man">Man</NavLink>
            <NavLink to="/woman">Woman</NavLink>
            <NavLink to="/popular">Popular</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </div>
          <div className="col-16">
            <NavLink to="/suport">Suport</NavLink>
            <NavLink to="/advertisement">Advertisement</NavLink>
            <NavLink to="/shop">Online Shop</NavLink>
          </div>
          <div className="col-50">
              <p>Sign up for news and events</p>
              <div className="newsletter">
                  <input type="text" placeholder="Your email address"/>
                  <button type="button">Submit</button>
              </div>
              <div className="social">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <AiFillFacebook />
                </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <AiFillInstagram />
                  </a>
                  <a href="https://google.com" target="_blank" rel="noreferrer">
                  <AiFillGooglePlusSquare />
                  </a>
                <a href="https://www.NavLinkedin.com/feed/" target="_blank" rel="noreferrer">
                <AiFillLinkedin />
                </a>
              </div>
          </div>
        </div>
      </div>
      <div className="container copyrights">
        <p> Copyrights 2017. Shoe Shop by <a href="www.myworlds.win/">MyWorlds.win</a></p>
        <NavLink to="/contact">Contac Us</NavLink>
      </div>
    </footer>
  );
};

export default Footer;
