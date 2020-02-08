import React, { useState, useEffect } from "react";
import dessertsDataFromJson from "./dessertsdata.json";

import "./Desserts.css";

const Desserts = () => {
  const [count, setCount] = useState(0);
  const [dessertsData, setDessertsData] = useState(dessertsDataFromJson);

  useEffect(() => {
    const dessertsSorted = dessertsDataFromJson.desserts.sort((a, b) => {
      if (a.rate < b.rate) return 1;
      if (a.rate > b.rate) return -1;
      return 0;
    });
    setDessertsData(dessertsSorted);
    getDesserts();
    console.log(dessertsSorted);
  }, [count]);

  const getDesserts = () => {
    console.log(dessertsData);
    return (
      <ul>
        {dessertsDataFromJson.desserts.map(dessert => (
          <li className="dessert" key={dessert.id}>
            <img
              className="dessert-image"
              src={dessert.image}
              alt={dessert.title}
            />
            <div className="dessert-information">
              <span className="dessert-information__title">
                {dessert.title}
              </span>
              <span className="dessert-information__rate">
                Rate: {dessert.rate}
              </span>
              <div className="dessert-information__votes">
                <button onClick={addRateHandler} value={dessert.id}>
                  {" "}
                  <i class="far fa-thumbs-up"></i>
                  Add vote!
                </button>
                <button
                  disabled={dessert.rate <= 0}
                  onClick={subtractRateHandler}
                  value={dessert.id}
                >
                  <i class="far fa-thumbs-down"></i>
                  Remove vote!
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  };
  const addRateHandler = event => {
    const dessertId = event.target.value;
    const dessertSelected = dessertsData.filter(selected => {
      return selected.id === dessertId;
    });
    console.log("dessertSelected", dessertSelected);
    dessertSelected[0].rate += 1;
    setCount(count + 1);
  };

  const subtractRateHandler = event => {
    const dessertId = event.target.value;
    const dessertSelected = dessertsData.filter(selected => {
      return selected.id === dessertId;
    });
    dessertSelected[0].rate -= 1;
    setCount(count - 1);
    console.log("dessertSelected", dessertSelected);
  };

  return <div>{getDesserts()}</div>;
};

export default Desserts;

// https://www.taste.com.au/recipes/collections/top-50-desserts?page=2&q=&sort=recent
