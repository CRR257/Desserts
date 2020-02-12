import React from "react";

import Desserts from "../Desserts/Desserts";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <span className="container-title">Vote your favourite dessert</span>
      <Desserts />
    </div>
  );
};

export default Home;
