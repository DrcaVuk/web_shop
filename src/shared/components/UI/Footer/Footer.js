import React from "react";
import { Link } from "react-router-dom";
import { AiFillInstagram, AiFillGooglePlusSquare, AiFillFacebook, AiFillLinkedin} from "react-icons/ai";

import Logo from "../../../images/Logo.png";

const Footer = (props) => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-16">
            <img src={Logo} alt="Logo image" />
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
                  <input type="text" />
                  <button type="button">Submit</button>
              </div>
              <div className="social">
                  <AiFillFacebook />
                  <AiFillInstagram />
                  <AiFillGooglePlusSquare />
                  <AiFillLinkedin />
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
