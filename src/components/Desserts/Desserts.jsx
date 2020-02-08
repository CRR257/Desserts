import React, { useState } from "react";
import dessertsDataFromJson from "./dessertsdata.json";

import "./Desserts.css";

const Desserts = () => {
  // const [count, setCount] = useState(0);
  // const [itemchanged, setItemChanged] = useState(false)
  const [dessertsData, setDessertsData] = useState(dessertsDataFromJson);

  // useEffect(() => {
  //   console.log("desserts before sorting", dessertsData)
  //   const copyDesserts = [...dessertsData]
  //   const dessertsSorted = copyDesserts.sort((a, b) => {
  //     if (a.rate < b.rate) return 1;
  //     if (a.rate > b.rate) return -1;
  //     return 0;
  //   });
  //   console.log("deserts after sorting", dessertsSorted)
  //   setDessertsData(dessertsSorted);
  //   // getDesserts();
  //   // console.log(dessertsSorted);
  //   console.log("updated!")
  // }, []);
  const sortAndUpdateDesserts = (desserts) => {
    const dessertsSorted = desserts.sort((a, b) => {
      if (a.rate < b.rate) return 1;
      if (a.rate > b.rate) return -1;
      return 0;
    });
    setDessertsData(dessertsSorted)
  }

  const addRateHandler = event => {
    // Copiar objecte desertsData
    const desserts = [...dessertsData]
    console.log("desserts", desserts)
    // Identificar quin desert he clicat i canviar-ho a dins de l'objecte COPIAT de desertsData
    const selectedDessert = event.target.value
    const updatedDesserts = desserts.map(dessert => {
      if(dessert.id === selectedDessert) {
        dessert.rate += 1
      }
      return dessert
    })
    sortAndUpdateDesserts(updatedDesserts)
  };

  const subtractRateHandler = event => {
    const dessertId = event.target.value;
    const dessertSelected = dessertsData.filter(selected => {
      return selected.id === dessertId;
    });
    dessertSelected[0].rate -= 1;
  };

  const getDesserts = () => {
    console.log(dessertsData);
    return (
      <ul>
        {dessertsData.map(dessert => (
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
                  <i className="far fa-thumbs-up"></i>
                  Add vote!
                </button>
                <button
                  disabled={dessert.rate <= 0}
                  onClick={subtractRateHandler}
                  value={dessert.id}
                >
                  <i className="far fa-thumbs-down"></i>
                  Remove vote!
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  };
  
  return <div>{getDesserts()}</div>;
};

export default Desserts;

// https://www.taste.com.au/recipes/collections/top-50-desserts?page=2&q=&sort=recent
