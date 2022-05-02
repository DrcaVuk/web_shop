import React from "react";

import Title from "../../shared/components/UI/Title/Title";
import ImageBox from "../../shared/components/UI/ImageBox/ImageBox";
import ContactForm from "../components/ContactForm/ContactForm";
import Img from "../../shared/images/Img03.png";

import classed from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <Title>Contact us</Title>
        <div className="row">
          <div className="col-50">
            <ContactForm />
          </div>
          <div className="col-50">
              <ImageBox className={classed.image} image={Img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
