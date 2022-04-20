import React from "react";
import LatestBlog from "../components/LatestBlog/LatestBlog";

import PreFallCollections from "../components/PreFallCollections/PreFallCollections";
import WeThoughtOfYou from "../components/WeThoughtOfYou/WeThoughtOfYou";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="container-fluid baner">
        <div className="container"></div>
      </div>
      <PreFallCollections />
      <WeThoughtOfYou />
      <LatestBlog />
    </div>
  );
};

export default Home;
