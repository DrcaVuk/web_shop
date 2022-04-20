import React from "react";
import Button from "../../../shared/components/UI/Button/Button";
import Description from "../../../shared/components/UI/Description/Description";
import ImageBox from "../../../shared/components/UI/ImageBox/ImageBox";
import Title from "../../../shared/components/UI/Title/Title";

import Img03 from "../../../shared/images/Img03.png";

import classed from "./LatestBlog.module.css";

const LatestBlog = (props) => {
  return (
    <div className={`container-fluid ${classed.box}`}>
      <div className="container">
        {/* <Title className={classed.title}>Latest Blog</Title> */}
        <div className="row">
          <div className="col-50">
            <ImageBox className={classed.imagebox} image={Img03}>
              <div className="box"><p>NIKE</p></div>
              <div className="outline"></div>
            </ImageBox>
          </div>
          <div className="col-50">
            <h3 className={classed.stitle}>Colourful Offer</h3>
            <Description>
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster
              collaborative thinking to further the overall value proposition.
              Organically grow the holistic world view of disruptive
            </Description>
            <Button  className={classed.button}>Read More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
