import React from "react";
import LatestBlog from "../components/LatestBlog/LatestBlog";

import Navbar from "../../shared/components/UI/Navbar/Navbar";
import Footer from "../../shared/components/UI/Footer/Footer";

import PreFallCollections from "../components/PreFallCollections/PreFallCollections";
import WeThoughtOfYou from "../components/WeThoughtOfYou/WeThoughtOfYou";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid baner">
        <div className="container"></div>
      </div>
      <PreFallCollections />
      <WeThoughtOfYou />
      <LatestBlog />
      <Footer />
    </div>
  );
};

export default Home;
