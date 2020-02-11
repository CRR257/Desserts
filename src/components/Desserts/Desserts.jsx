import React, { Fragment, useState, useEffect } from "react";
import dessertsDataFromJson from "../../data/dessertsData.json";

import Dessert from "../Dessert/Dessert.jsx";
import Button from "../UI/Button/Button";
import "./Desserts.css";

const Desserts = () => {
  const [dessertsData, setDessertsData] = useState([]);
  const [autoRateDesserts, setAutoRateDesserts] = useState(false);

  useEffect(() => {
    sortAndUpdateDesserts(dessertsDataFromJson);
  }, []);

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

  const addRateHandler = (event, id) => {
    const desserts = [...dessertsData];
    const selectedDessert = id || event.target.value;
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

  const randomClickHandler = () => {
    const timer = setInterval(() => {
      const randomItem = Math.floor(Math.random() * dessertsData.length);
      addRateHandler(null, randomItem.toString());
      clearInterval(timer);
      randomClickHandler();
    }, 1000 + Math.floor(Math.random() * 2000));
    setAutoRateDesserts(timer);
  };

  const stopClickHandler = () => {
    clearTimeout(autoRateDesserts);
  };

  return (
    <Fragment>
      <div className="desserts-randomclick">
        <Button clicked={randomClickHandler}>Random clicked!</Button>
        <Button clicked={stopClickHandler}>Stop Random!</Button>
      </div>
      {!dessertsData ? (
        <p>Loading desserts</p>
      ) : (
        <ul className="desserts-container">
          {dessertsData.map(dessert => {
            return (
              <Dessert
                dessert={dessert}
                onAddClickedHandler={addRateHandler}
                onRemoveClickedHandler={subtractRateHandler}
                onRandomClickedHandler={randomClickHandler}
                onRandomStopClickHandler={stopClickHandler}
              />
            );
          })}
        </ul>
      )}
    </Fragment>
  );
};

export default Desserts;
