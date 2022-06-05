import React from "react";
import Description from "../../shared/components/UI/Description/Description";
import ImageBox from "../../shared/components/UI/ImageBox/ImageBox";
import Title from "../../shared/components/UI/Title/Title";

import Img06 from "../../shared/images/Img06.png";

import classed from "./About.module.css";

const About = () => {
  return (
    <div className="container-fluid">
      <div className={`container ${classed.about}`}>
        <div className="row">
          <div className="col-50" >
            <Title>About Us</Title>
            <Description>
              Our mission is what drives us to do everything possible to expand
              human potential. We do that by creating groundbreaking sport
              innovations, by making our products more sustainably, by building
              a creative and diverse global team and by making a positive impact
              in communities where we live and work. Based in Beaverton, Oregon,
              NIKE, Inc. includes the Nike, Converse, and Jordan brands.
            </Description>
          </div>
          <div className={`col-50`}>
              <ImageBox className={classed.image} image={Img06} alt="About Nike"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
