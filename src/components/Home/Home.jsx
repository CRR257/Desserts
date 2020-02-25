import React from "react";

import Desserts from "../Desserts/Desserts";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <span className="container-title">
        <span role="img" aria-label="pie" className="container-emoji">
          🥧 
        </span>
        Vote your favourite dessert
        <span role="img" aria-label="pie" className="container-emoji">
          🥧
        </span>
      </span>
      <Desserts />
    </div>
  );
};

export default Home;
