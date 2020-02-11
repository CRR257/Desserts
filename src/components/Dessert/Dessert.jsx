import React from "react";
import Button from "../UI/Button/Button";

import "./Dessert.css";

const Dessert = props => {
  return (
    <li className="dessert" key={props.dessert.id}>
      <img
        className="dessert-image"
        src={props.dessert.image}
        alt={props.dessert.title}
      />
      <div className="dessert-information">
        <span className="dessert-information__title">
          {props.dessert.title}
        </span>
        <span className="dessert-information__rate">
          Rate: {props.dessert.rate}
        </span>
        <div className="dessert-information__votes">
          <Button clicked={props.onAddClickedHandler} value={props.dessert.id}>
            <i className="far fa-thumbs-up"></i>
            Add vote!
          </Button>
          <Button
            disabled={props.dessert.rate <= 0}
            clicked={props.onRemoveClickedHandler}
            value={props.dessert.id}
          >
            <i className="far fa-thumbs-down"></i>
            Remove vote!
          </Button>
        </div>
      </div>
    </li>
  );
};

export default Dessert;
