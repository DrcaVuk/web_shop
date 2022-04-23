import React from "react";

import PopularArrivals from "../components/PopularArrivals/PopularArrivals";
import LatestBlog from "../components/LatestBlog/LatestBlog";
import PreFallCollections from "../components/PreFallCollections/PreFallCollections";
import WeThoughtOfYou from "../components/WeThoughtOfYou/WeThoughtOfYou";

import "./Home.css";
const Home = () => {
  return (
    <div>
      <PopularArrivals />
      <PreFallCollections />
      <WeThoughtOfYou />
      <LatestBlog />
    </div>
  );
};

export default Home;
