import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";

import MainNavigation from "./MainNavigation";

import "./MainHeader.css";

const MainHeader = (props) => {
  const { pathname } = useLocation();

useEffect(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'instant',
  });
}, [pathname])

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
