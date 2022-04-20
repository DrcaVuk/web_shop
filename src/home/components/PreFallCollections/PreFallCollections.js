import React from "react";
import Button from "../../../shared/components/UI/Button/Button";
import Description from "../../../shared/components/UI/Description/Description";
import ImageBox from "../../../shared/components/UI/ImageBox/ImageBox";
import Title from "../../../shared/components/UI/Title/Title";

import Img02 from "../../../shared/images/Img02.png";
import classed from "./PreFallCollections.module.css";

const PreFallCollections = (props) => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-50">
            <Title className={classed.title}>Pre-Fall Collections</Title>
            <Description className={classed.description}>
              Bring to the table win-win survival strategies to ensure proact
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation X is on the runway heading
              towards a streamlined cloud solution. User generated content in
              real-time will.
            </Description>
            <Button>View Detalls</Button>
          </div>
          <div className="col-50">
            <ImageBox image={Img02}></ImageBox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreFallCollections;
