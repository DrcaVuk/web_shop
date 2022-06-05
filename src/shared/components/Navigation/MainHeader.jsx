import React from "react";

import MainNavigation from "./MainNavigation";
import Img01 from "../../images/Img01.png";

import "./MainHeader.css";

const MainHeader = (props) => {
  return (
    <header>
      <div className="container-fluid">
        <div className="container">
          <MainNavigation />
          <div className="content">
            <div>
              <h1>Nike</h1>
              <div className="brand">
                <p>SHOP BY BRANDS</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-box">
          <p>
            Nike, originally known as Blue Ribbon Sports was founded by
            University of Oregon track athlete Phil Knight.
          </p>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
