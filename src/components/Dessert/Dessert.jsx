import React from "react";
import Button from "../UI/Button/Button";

import "./Dessert.css";

const Dessert = props => {
  return (
    <ul className="desserts-container">
      {props.dessertsData.map(dessert => (
        <li className="dessert" key={dessert.id}>
          <img
            className="dessert-image"
            src={dessert.image}
            alt={dessert.title}
          />
          <div className="dessert-information">
            <span className="dessert-information__title">{dessert.title}</span>
            <span className="dessert-information__rate">
              Rate: {dessert.rate}
            </span>
            <div className="dessert-information__votes">
              <Button clicked={props.onAddClickedHandler} value={dessert.id}>
                <i className="far fa-thumbs-up"></i>
                Add vote!
              </Button>
              <Button
                disabled={dessert.rate <= 0}
                clicked={props.onRemoveClickedHandler}
                value={dessert.id}
              >
                <i className="far fa-thumbs-down"></i>
                Remove vote!
              </Button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Dessert;
