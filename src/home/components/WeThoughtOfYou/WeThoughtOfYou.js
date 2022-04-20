import React from "react";
import Description from "../../../shared/components/UI/Description/Description";

import Title from "../../../shared/components/UI/Title/Title";
import classed from "./WeThoughtOfYou.module.css";

const WeThoughtOfYou = (props) => {
  return (
    <div className={`container-fluid ${classed.box}`}>
      <div className="container">
        <Title className={classed.title}>We Thought of you</Title>
        <Description className={classed.description}>
          Capitalize on low hanging fruit to identify a ballpark value added
          activity to beta test. Override the digital divide with additional
          clickthroughs from DevOps. Nanotechnology immersion along the
          information highway will close the loop on focusing solely on the
          bottom line.
        </Description>
        <p className={classed.sweety}>Nandy Sweety</p>
        <a>Ui Designer</a>
      </div>
    </div>
  );
};

export default WeThoughtOfYou;
