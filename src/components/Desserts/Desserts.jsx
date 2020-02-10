import React, { useState } from "react";
import dessertsDataFromJson from "../../data/dessertsData.json";

import Dessert from "../Dessert/Dessert.jsx";

const Desserts = () => {
  const [dessertsData, setDessertsData] = useState(dessertsDataFromJson);

  const sortAndUpdateDesserts = desserts => {
    const dessertsSorted = desserts.sort((a, b) => {
      if (a.rate < b.rate) return 1;
      if (a.rate > b.rate) return -1;
      if (a.rate === b.rate) {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      }
      return 0;
    });
    setDessertsData(dessertsSorted);
  };

  const addRateHandler = event => {
    alert("aaa")
    const desserts = [...dessertsData];
    const selectedDessert = event.target.value;
    const updatedDesserts = desserts.map(dessert => {
      if (dessert.id === selectedDessert) {
        dessert.rate += 1;
      }
      return dessert;
    });
    sortAndUpdateDesserts(updatedDesserts);
  };

  const subtractRateHandler = event => {
    const desserts = [...dessertsData];
    const selectedDessert = event.target.value;
    const updatedDesserts = desserts.map(dessert => {
      if (dessert.id === selectedDessert) {
        dessert.rate -= 1;
      }
      return dessert;
    });
    sortAndUpdateDesserts(updatedDesserts);
  };

  const getDesserts = () => {
    return (
      <Dessert
        dessertsData={dessertsData}
        onAddClickedHandler={addRateHandler}
        onRemoveClickedHandler={subtractRateHandler}
      ></Dessert>
    );
  };

  return <div>{getDesserts()}</div>;
};

export default Desserts;
