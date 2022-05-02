import React from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useHttpClient } from "../../hooks/http-hook";

import {TiSocialGooglePlus, TiSocialInstagram, TiSocialFacebook} from "react-icons/ti";
import { ImLinkedin2} from "react-icons/im"

import Logo from "../UI/Logo/Logo";

import './Footer.css';

const Footer = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const formik = useFormik({
    initialValues: {
      email: ""
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Enter your email")
    }),
    onSubmit: (value) => {
      sendRequest("/newsletter", "POST", value);
      formik.resetForm();
    }
  })
  return (
    <footer>
      <div className="container box">
        <div className="row">
          <div className="col-16">
            <Logo />
          </div>
          <div className="col-16">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop/man">Man</NavLink>
            <NavLink to="/shop/woman">Woman</NavLink>
            <NavLink to="/shop/popular">Popular</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </div>
          <div className="col-16">
            <NavLink to="/suport">Support</NavLink>
            <NavLink to="/advertisement">Advertisement</NavLink>
            <NavLink to="/shop">Online Shop</NavLink>
          </div>
          <div className="col-50">
              <p>Sign up for news and events</p>
              <div className="newsletter">
                <form onSubmit={formik.onSubmit} >
                  <input type="text" name="email" onChange={formik.handleChange} value={formik.values.email} placeholder="Your email address"/>
                  <button type="button" onClick={formik.handleSubmit}>Submit</button>
                  </form>
              </div>
              <div className="social">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <TiSocialFacebook />
                </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <TiSocialInstagram />
                  </a>
                  <a href="https://google.com" target="_blank" rel="noreferrer">
                  <TiSocialGooglePlus />
                  </a>
                <a href="https://www.NavLinkedin.com/feed/" target="_blank" rel="noreferrer">
                <ImLinkedin2 />
                </a>
              </div>
          </div>
        </div>
      </div>
      <div className="container copyrights">
        <p>Shoe Shop by <a href="www.myworlds.win/">MyWorlds.win</a></p>
        <NavLink to="/contact">Contac Us</NavLink>
      </div>
    </footer>
  );
};

export default Footer;
