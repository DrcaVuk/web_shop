import React from "react";
import { Link } from "react-router-dom";
import { AiFillInstagram, AiFillGooglePlusSquare, AiFillFacebook, AiFillLinkedin} from "react-icons/ai";

import Logo from "../../../images/Logo.png";

import './Footer.css';

const Footer = (props) => {
  return (
    <footer>
      <div className="container box">
        <div className="row">
          <div className="col-16">
            <Link to="/">
              <img src={Logo} alt="Logo image" />
            </Link>
          </div>
          <div className="col-16">
            <Link to="#">Home</Link>
            <Link to="#">Man</Link>
            <Link to="#">Woman</Link>
            <Link to="#">Popular</Link>
            <Link to="#">About</Link>
            <Link to="#">Blog</Link>
          </div>
          <div className="col-16">
            <Link to="#">Suport</Link>
            <Link to="#">Advertisement</Link>
            <Link to="#">Online Shop</Link>
          </div>
          <div className="col-50">
              <p>Sign up for news and events</p>
              <div className="newsletter">
                  <input type="text" placeholder="Your email address"/>
                  <button type="button">Submit</button>
              </div>
              <div className="social">
                <a href="#" target="_blank">
                <AiFillFacebook />
                </a>
                  <a href="#" target="_blank">
                  <AiFillInstagram />
                  </a>
                  <a href="#" target="_blank">
                  <AiFillGooglePlusSquare />
                  </a>
                <a href="#" target="_blank">
                <AiFillLinkedin />
                </a>
              </div>
          </div>
        </div>
      </div>
      <div className="container copyrights">
        <p> Copyrights 2017. Shoe Shop by <a href="www.myworlds.win/">MyWorlds.win</a></p>
        <Link to="#">Contac Us</Link>
      </div>
    </footer>
  );
};

export default Footer;
