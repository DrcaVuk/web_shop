import React from "react";
import ImageBox from "../../../shared/components/UI/ImageBox/ImageBox";
import Title from "../../../shared/components/UI/Title/Title";

import Img03 from "../../../shared/images/Img03.png";

import classed from "./LatestBlog.module.css";

const LatestBlog = (props) => {
  return (
    <div className={`container-fluid ${classed.box}`}>
      <div className="container">
        <Title className={classed.title}>Latest Blog</Title>
        <div className="row">
          <div className="col-50">
              <ImageBox image={Img03}></ImageBox>
          </div>
          <div className="col-50"></div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
