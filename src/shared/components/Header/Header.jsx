import React from "react";

import Navbar from "../Navbar/Navbar";
import Img01 from "../../images/Img01.png";

import "./Header.css";

const Header = (props) => {
  return (
    <header>
      <div className="container-fluid">
        <div className="container">
          <Navbar />
          <div className="content">
            <div>
              <h1>Nike</h1>
              <div className="brand">
                <p>SHOP BY BRANDS</p>
              </div>
            </div>

            <img src={Img01} alt="Sneaker" />
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

export default Header;
